import { FastifyRequest, FastifyReply } from "fastify"
import { cloudinary, prisma } from "../../server"
import { modifyItem, Items } from "./item.type"

// POST an Item
export const createItem = {
   schema: {
      body: modifyItem,
      response: {
         201: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
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
      // if (request.session.authenticated === true) {
      try {
         const { title, description, quantity, price, url } = request.body
         let secure_url

         await cloudinary.uploader
            .upload(url, {
               public_id: title,
               transformation: { width: 350, crop: "scale", gravity: "auto", quality: "auto" },
            })
            .then((reply: any) => {
               secure_url = reply.secure_url
               console.log(reply)
            })
            .catch((error: any) => console.log(error))

         // CREATE Item
         const addItem = await prisma.item.create({
            data: {
               title: String(title),
               description: String(description),
               quantity: Number(quantity),
               price: Number(price),
               url: String(secure_url),
               date: String(new Date().toISOString()),
            },
         })

         if (!addItem) {
            reply.status(400).send("Error Message: (400) Status")
         }
         reply.status(200).send(addItem)
         console.log("Created new Item successfully!")
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
      // }
      // reply.status(401).send("Error Message: (401) Status")
   },
}
