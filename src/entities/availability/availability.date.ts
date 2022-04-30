import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./availability.type"

// GET an Availability
export const availabilityDate = {
   schema: {
      response: {
         200: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { date: string }
      }>,
      reply: FastifyReply
   ) => {
      try {
         const { date } = request.params

         // GET Availability by ID
         const availability = await prisma.availability.findUnique({
            where: { date: String(date) },
         })

         if (!availability) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(availability)
         console.log("Read an Availability successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
