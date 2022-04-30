import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./appointment.type"

// GET an Appointment by User ID
export const appointmentUserId = {
   schema: {
      response: {
         200: {
            type: "array",
            items: Items,
         },
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { id: string }
      }>,
      reply: FastifyReply
   ) => {
      try {
         const { id } = request.params

         const appointment = await prisma.bookingList.findMany({
            where: {
               userUserID: id,
               booking: {
                  date: {
                     gte: new Date(new Date().setDate(new Date().getDate() - 1)),
                  },
               },
            },
            orderBy: [
               {
                  booking: {
                     date: "asc",
                  },
               },
               {
                  booking: {
                     startTime: "asc",
                  },
               },
            ],
            include: {
               booking: true,
            },
         })

         if (!appointment) {
            reply.status(400).send("Error Message: (400) Status")
         }

         reply.status(200).send(appointment)
         console.log("Read an Appointment successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
