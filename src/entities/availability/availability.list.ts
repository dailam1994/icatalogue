import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./availability.type"

// GET ALL Availabilities
export const allAvailability = {
   schema: {
      response: {
         200: {
            type: "array",
            items: Items,
         },
      },
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      try {
         let session = request.session

         if (session.authenticated === true && session.user.role === "ADMIN") {
            // GET ALL Availabilities for ADMIN
            const availabilities = await prisma.availability.findMany({})

            if (!availabilities) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(availabilities)
            console.log("Read ALL Availabilities successfully!")
         } else if (session.authenticated === true && session.user.role === "CLIENT") {
            // GET ALL Availabilities for CLIENT
            const availabilities = await prisma.availability.findMany({
               where: {
                  date: {
                     gte: new Date(new Date().setDate(new Date().getDate() - 1)),
                  },
               },
            })

            if (!availabilities) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(availabilities)
            console.log("Read ALL Availabilities successfully!")
         }
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
