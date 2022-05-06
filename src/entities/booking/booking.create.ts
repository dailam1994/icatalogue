import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { modifyItem, Items } from "./booking.type"
import moment from "moment-timezone"

// POST A Booking
export const createBooking = {
   schema: {
      body: modifyItem,
      response: {
         201: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
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
         const { date, startTime, endTime, firstService, secondService, thirdService, fourthService, fifthService } =
            request.body

         //  CREATE Book
         const addBooking = await prisma.booking.create({
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

         // GET ALL Books by Date/Time
         const id = await prisma.booking.findMany({
            where: {
               date: String(new Date(date).toISOString()),
               startTime: String(moment(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
               endTime: String(moment(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
            },
         })

         // CREATE Booking List
         await prisma.bookingList.create({
            data: {
               bookingBookingID: String(id[0].bookingID),
               userUserID: request.session.user.userId,
            },
         })

         if (!addBooking) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(addBooking)
         console.log("Created new Booking successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
