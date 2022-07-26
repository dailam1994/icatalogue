import { FastifyRequest, FastifyReply } from "fastify"
import { cloudinary, prisma } from "../../server"
import { Items, modifyItem } from "./item.type"

// PUT an Item
export const updateItem = {
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
            title: string
            description: string
            quantity: number
            price: number
            url: string
         }
      }>,
      reply: FastifyReply
   ) => {
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params
            const { title, description, quantity, price, url } = request.body
            let updateItem
            let secure_url

            if (request.body.url.startsWith("https")) {
               // UPDATE Item by ID
               updateItem = await prisma.item.update({
                  where: { itemID: String(id) },
                  data: {
                     title: String(title),
                     description: String(description),
                     quantity: Number(quantity),
                     price: Number(price),
                     url: String(url),
                     date: String(new Date().toISOString()),
                  },
               })
            } else {
               await cloudinary.uploader
                  .upload(url, {
                     public_id: title,
                     invalidate: true,
                     overwrite: true,
                     transformation: { width: 350, crop: "scale" },
                  })
                  .then((reply: { secure_url: string }) => {
                     secure_url = reply.secure_url
                  })
                  .catch((error: string) => console.log(error))

               // UPDATE Item by ID
               updateItem = await prisma.item.update({
                  where: { itemID: String(id) },
                  data: {
                     title: String(title),
                     description: String(description),
                     quantity: Number(quantity),
                     price: Number(price),
                     url: String(secure_url),
                     date: String(new Date().toISOString()),
                  },
               })
            }

            if (!updateItem) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(updateItem)
            console.log("Updated A Item successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
