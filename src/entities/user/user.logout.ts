import { FastifyRequest, FastifyReply } from 'fastify';
import { Items } from './user.type'

// POST Logout User
export const logoutUser = {
    schema: {
        response: {
            200: Items
        },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        console.log(request.session)
        if (!request.session.authenticated) {
            reply.status(400).send("Error Message: (400) Status")
        }

        try {
            // Exiting User Session
            request.destroySession((error: Error | undefined) => {
                if (!error) {
                    reply.status(200).send("Successfully Logged Out!")
                }
                reply.status(500).send({ message: 'Error Message: (500) Status' })
            })
        } catch (error) {
            reply.status(500).send({ message: "Error Message: (500) Status" })
        }
    }
}