import { FastifyRequest, FastifyReply } from "fastify"
import { authStatus } from "./admin.type"

// GET Auth Admin
export const authAdmin = {
   schema: {
      response: {
         200: authStatus,
      },
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      try {
         // Creating data for handling session
         const session = request.session

         reply.status(200).send(session)
         // console.log('Read Auth Admin successfully!')
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
