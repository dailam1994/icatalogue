import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./blockip.type"

// DELETE A Block IP
export const deleteBlockip = {
   schema: {
      response: {
         200: deleteItem,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Body: {
            ip: string
         }
      }>,
      reply: FastifyReply
   ) => {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            const { ip } = request.body
            console.log(ip)
            // DELETE Blockip by IP
            const deleteBlockip = await prisma.blockip.delete({
               where: {
                  ip: String(ip),
               },
            })

            if (!deleteBlockip) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(`IP Address ${ip} Unblocked successfully`)
            console.log("Unblocked IP successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
