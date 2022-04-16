import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from './user.type'

// GET A User
export const user = {
    schema: {
        response: {
            200: Items
        }
    },
    handler: async (request: FastifyRequest<{
        Params: { id: string }
    }>, reply: FastifyReply) => {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { id } = request.params

                // GET User by ID
                const user = await prisma.user.findUnique({
                    where: { userID: String(id) },
                })

                if (!user) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(user)
                console.log('Read A User successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}
