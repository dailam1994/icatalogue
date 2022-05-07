import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items, modifyItem } from "./record.type"

// PUT A Record
export const updateRecord = {
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
         const { id } = request.params
         const { date, start, end, firstService, secondService, thirdService, fourthService, fifthService } =
            request.body

         // UPDATE Record by ID
         const updateRecord = await prisma.record.update({
            where: { recordID: String(id) },
            data: {
               date: String(date),
               start: String(start),
               end: String(end),
               firstService: String(firstService),
               secondService: String(secondService),
               thirdService: String(thirdService),
               fourthService: String(fourthService),
               fifthService: String(fifthService),
            },
         })

         if (!updateRecord) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(updateRecord)
         console.log("Updated a Record successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
