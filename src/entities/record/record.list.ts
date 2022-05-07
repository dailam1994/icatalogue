import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { AllItems } from "./record.type"

// GET ALL Records
export const allRecords = {
   schema: {
      response: {
         200: {
            type: "array",
            items: AllItems,
         },
      },
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            // GET ALL Records
            const records = await prisma.recordList.findMany({
               include: {
                  record: true,
                  user: {
                     select: {
                        firstName: true,
                        lastName: true,
                     },
                  },
               },
            })

            if (!records) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(records)
            console.log("Read ALL Records successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
