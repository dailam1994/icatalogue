import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"

// DELETE a Logging
export const deleteLogging = {
   schema: {
      response: 200,
   },
   handler: async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
         // DELETE Logging by ID
         const deleteLogging = await prisma.logging.deleteMany()

         if (!deleteLogging) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(`ALL Loggings deleted successfully`)
         console.log("Deleted a Record successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
