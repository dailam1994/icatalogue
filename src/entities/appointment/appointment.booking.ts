import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { AdminItems } from "./appointment.type"

// // GET an Appointment by Booking ID
export const appointmentBookingId = {
   schema: {
      response: {
         200: {
            type: "array",
            items: AdminItems,
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
               bookingBookingID: id,
            },
            include: {
               booking: true,
               user: {
                  select: {
                     firstName: true,
                     lastName: true,
                  },
               },
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
