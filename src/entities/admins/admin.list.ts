import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./admin.type"

// GET ALL Admins
export const allAdmins = {
   schema: {
      response: {
         200: {
            type: "array",
            items: Items,
         },
      },
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      if (request.session.authenticated === true) {
         try {
            // GET ALL Admins
            const admins = await prisma.admin.findMany()

            if (!admins) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(admins)
            console.log("Read ALL Admins successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
