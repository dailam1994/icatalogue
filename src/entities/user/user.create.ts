import { FastifyRequest, FastifyReply } from "fastify"
import { Role } from "@prisma/client"
import { fastify, prisma } from "../../server"
import { modifyItem, Items } from './user.type'

type roles = keyof typeof Role

// POST A User
export const createUser = {
    schema: {
        body: modifyItem,
        response: {
            201: Items
        },
    },
    handler: async (request: FastifyRequest<{
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
        // if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
        try {
            const { firstName, lastName, dateOfBirth, email, username, password,
                roles } = request.body;

            const hashedPassword = await fastify.bcrypt.hash(password)

            const addUser = await prisma.user.create({
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

            if (!addUser) {
                reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(addUser)
            console.log('Created new User successfully!')

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
        // }
        reply.status(401).send('Error Message: (401) Status')
    }
}