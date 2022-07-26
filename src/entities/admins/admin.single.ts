import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./admin.type"

// GET an Admin
export const admin = {
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
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params

            // GET Admin by ID
            const admin = await prisma.admin.findUnique({
               where: { adminID: String(id) },
            })

            if (!admin) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(admin)
            // console.log("Read Admin successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
