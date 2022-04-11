import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from './user.type'

// GET ALL Users
export const allUsers = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Items
            }
        }
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        console.log(request.session)
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const users = await prisma.user.findMany()

                if (!users) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(users)
                console.log('Read ALL Users successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}