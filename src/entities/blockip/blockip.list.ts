import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"

// GET ALL Blocked IPs
export const allBlockip = {
   schema: {
      response: 200,
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      // Checking if a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            // GET ALL Blocked Ips
            const blockedips = await prisma.blockip.findMany()

            if (!blockedips) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(blockedips)
            console.log("Read ALL Blocked IPs successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
