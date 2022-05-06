import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items, modifyItem } from "./booking.type"
import moment from "moment-timezone"

// PUT A Booking
export const updateBooking = {
   schema: {
      body: modifyItem,
      response: {
         200: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { id: string }
         Body: {
            date: string
            startTime: string
            endTime: string
            firstService: string | null
            secondService: string | null
            thirdService: string | null
            fourthService: string | null
            fifthService: string | null
         }
      }>,
      reply: FastifyReply
   ) => {
      try {
         const { id } = request.params
         const { date, startTime, endTime, firstService, secondService, thirdService, fourthService, fifthService } =
            request.body

         // UPDATE Book by ID
         const updateBooking = await prisma.booking.update({
            where: { bookingID: String(id) },
            data: {
               date: String(new Date(date).toISOString()),
               startTime: String(moment(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
               endTime: String(moment(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
               firstService: String(firstService),
               secondService: String(secondService),
               thirdService: String(thirdService),
               fourthService: String(fourthService),
               fifthService: String(fifthService),
            },
         })

         if (!updateBooking) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(updateBooking)
         console.log("Updated a Booking successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
