import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import validator from "validator"
import { modifyItem, Items } from "./blockip.type"

// POST A Block IP
export const createBlockip = {
   schema: {
      body: modifyItem,
      response: {
         201: Items,
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

            // CREATE User Account
            const addBlockip = await prisma.blockip.create({
               data: {
                  ip: validator.escape(String(ip)),
               },
            })

            if (!addBlockip) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(addBlockip)
            console.log("Blocked and IP successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
