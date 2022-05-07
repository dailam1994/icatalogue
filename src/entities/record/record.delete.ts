import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./record.type"

// DELETE a Record
export const deleteRecord = {
   schema: {
      response: {
         200: deleteItem,
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

         // DELETE Record by ID
         const deleteRecord = await prisma.record.delete({
            where: { recordID: String(id) },
         })

         if (!deleteRecord) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(`Record ${id} deleted successfully`)
         console.log("Deleted a Record successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
