import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./item.type"

// GET an Item
export const item = {
   schema: {
      response: {
         200: Items,
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

         // GET Item by ID
         const item = await prisma.item.findUnique({
            where: { itemID: String(id) },
         })

         if (!item) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(item)
         console.log("Read Item successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
