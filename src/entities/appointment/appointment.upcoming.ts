import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { AdminItems } from "./appointment.type"

// GET Today's Appointment
export const appointmentUpcoming = {
   schema: {
      response: {
         200: {
            type: "array",
            items: AdminItems,
         },
      },
   },
   handler: async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
         const appointment = await prisma.bookingList.findMany({
            where: {
               booking: {
                  date: {
                     gte: new Date(new Date().setDate(new Date().getDate() + 0)),
                  },
               },
            },
            orderBy: {
               booking: {
                  startTime: "asc",
               },
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
