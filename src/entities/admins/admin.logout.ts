import { FastifyRequest, FastifyReply } from "fastify"
import { Items } from "./admin.type"

// POST Logout Admin
export const logoutAdmin = {
   schema: {
      response: {
         200: Items,
      },
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      // Checking if a user w/in a session is authenticated
      if (!request.session.authenticated) {
         reply.status(400).send("Error Message: (400) Status")
      }

      try {
         // Authentication Restriction to remove the user sessions
         // Exiting User Session
         request.destroySession((error: Error | undefined) => {
            if (!error) {
               reply.status(200).send("Successfully Logged Out!")
            }
            reply.status(500).send({ message: "Error Message: (500) Status" })
         })
      } catch (error) {
         reply.status(500).send({ message: "Error Message: (500) Status" })
      }
   },
}
