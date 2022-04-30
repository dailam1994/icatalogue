import { FastifyRequest, FastifyReply } from "fastify"
import { authStatus } from './user.type'

// GET Auth Client
export const authClient = {
    schema: {
        response: {
            200: authStatus
        }
    },
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                // Creating data for handling session
                const session = request.session
    
                reply.status(200).send(session)
                // console.log('Read Auth User successfully!')
    
            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
            reply.status(401).send('Error Message: (401) Status')
        }
}