import { FastifyRequest, FastifyReply } from "fastify"
import { Role } from "@prisma/client"
import { fastify, prisma } from "../../server"
import { Items, modifyItem } from './user.type'

type roles = keyof typeof Role

// PUT A User
export const updateUser = {
    schema: {
        body: modifyItem,
        response: {
            200: Items
        },
    },
    handler: async (request: FastifyRequest<{
        Params: { id: string },
        Body: {
            firstName: string,
            lastName: string,
            dateOfBirth: string,
            email: string,
            username: string,
            password: string,
            roles: roles
        }
    }>, reply: FastifyReply) => {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { id } = request.params
                const { firstName, lastName, dateOfBirth, email, username, password,
                    roles } = request.body;

                // Hashing updated user password
                let hashedPassword = fastify.bcrypt.hash(password)
                if (!password.startsWith("$2b$06$")) {
                    hashedPassword = fastify.bcrypt.hash(password)
                }

                // UPDATE User by ID
                const updateUser = await prisma.user.update({
                    where: { userID: String(id) },
                    data: {
                        firstName: String(firstName),
                        lastName: String(lastName),
                        dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                        email: String(email),
                        username: String(username),
                        password: String(hashedPassword),
                        roles
                    }
                })

                if (!updateUser) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(updateUser)
                console.log('Updated A User successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}
