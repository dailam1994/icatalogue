import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import validator from "validator"
import { modifyItem, Items } from "./record.type"

// POST A Record
export const createRecord = {
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
            start: string
            end: string
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
         const { date, start, end, firstService, secondService, thirdService, fourthService, fifthService } =
            request.body

         console.log(request.body)

         //  CREATE Record
         const addRecord = await prisma.record.create({
            data: {
               date: validator.escape(String(date)),
               start: validator.escape(String(start)),
               end: validator.escape(String(end)),
               firstService: validator.escape(String(firstService)),
               secondService: validator.escape(String(secondService)),
               thirdService: validator.escape(String(thirdService)),
               fourthService: validator.escape(String(fourthService)),
               fifthService: validator.escape(String(fifthService)),
            },
         })

         // GET ALL Records by Date/Time
         const id = await prisma.record.findMany({
            where: {
               date: validator.escape(String(date)),
               start: validator.escape(String(start)),
               end: validator.escape(String(end)),
            },
         })

         // CREATE Record List
         await prisma.recordList.create({
            data: {
               recordRecordID: String(id[0].recordID),
               userUserID: request.session.user.userId,
            },
         })

         if (!addRecord) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(addRecord)
         console.log("Created new Booking successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
