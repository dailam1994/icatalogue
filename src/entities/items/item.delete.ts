import { FastifyRequest, FastifyReply } from "fastify"
import { cloudinary, prisma } from "../../server"
import { removeItem } from "./item.type"

// DELETE an Item
export const deleteItem = {
   schema: {
      body: removeItem,
      response: {
         200: removeItem,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { id: string }
         Body: {
            id: string
            title: string
         }
      }>,
      reply: FastifyReply
   ) => {
      if (request.session.authenticated === true) {
         try {
            const { id, title } = request.body
            console.log(request.body)

            await cloudinary.uploader
               .destroy(title, { overwrite: true, invalidate: true })
               .then((reply: string) => {
                  console.log(reply)
               })
               .catch((error: string) => console.log(error))

            // DELETE Item by ID
            const deleteItem = await prisma.item.delete({
               where: { itemID: String(id) },
            })

            if (!deleteItem) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(`Item ${id} deleted successfully`)
            console.log("Deleted Item successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
