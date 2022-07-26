import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./item.type"

// GET ALL Items
export const allItems = {
   schema: {
      response: {
         200: {
            type: "array",
            items: Items,
         },
      },
   },
   handler: async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
         // GET ALL Items
         const items = await prisma.item.findMany({
            orderBy: {
               title: "asc",
            },
         })

         if (!items) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(items)
         // console.log("Read ALL Items successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
