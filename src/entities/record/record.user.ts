import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { AllItems } from "./record.type"

// GET an Records by User ID
export const recordUserId = {
   schema: {
      response: {
         200: {
            type: "array",
            items: AllItems,
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

         const record = await prisma.recordList.findMany({
            where: {
               userUserID: id,
            },
            include: {
               record: true,
            },
         })

         if (!record) {
            reply.status(400).send("Error Message: (400) Status")
         }

         reply.status(200).send(record)
         console.log("Read an Record Successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
