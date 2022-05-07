import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./record.type"

// GET A Record
export const record = {
   schema: {
      response: {
         200: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { id: string }
      }>,
      reply: FastifyReply
   ) => {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params

            // GET Record by ID
            const record = await prisma.record.findUnique({
               where: { recordID: String(id) },
            })

            if (!record) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(record)
            console.log("Read A Record by ID successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
