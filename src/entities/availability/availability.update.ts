import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items, modifyItem } from "./availability.type"
import moment from "moment-timezone"

// PUT an Availability
export const updateAvailability = {
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
         }
      }>,
      reply: FastifyReply
   ) => {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            const { id } = request.params
            const { date, startTime, endTime } = request.body

            // UPDATE Availability by ID
            const updateAvailability = await prisma.availability.update({
               where: { availabilityID: String(id) },
               data: {
                  date: String(new Date(date).toISOString()),
                  startTime: String(moment(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
                  endTime: String(moment(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
               },
            })

            // console.log(startTime)
            // console.log(moment.tz(`${date} ${startTime}`, "Australia/Brisbane").format())
            // console.log(moment().toDate())
            // console.log(moment(`${date} ${startTime}`).toDate())
            // console.log(moment(`${date} ${startTime}`).add(10, "hours").toDate())
            // console.log(moment().toDate().toLocaleTimeString())
            // console.log(moment(`${date} ${startTime}`).toDate().toLocaleTimeString())
            // console.log(new Date(`${date} ${startTime}`).toISOString())
            // console.log(new Date(`${date} ${startTime}`).toISOString())

            if (!updateAvailability) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(updateAvailability)
            console.log("Updated an availability successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
