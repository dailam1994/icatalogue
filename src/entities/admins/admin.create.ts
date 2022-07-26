import { FastifyRequest, FastifyReply } from "fastify"
import { fastify, prisma } from "../../server"
import { modifyItem, Items } from "./admin.type"

// POST an Admin
export const createAdmin = {
   schema: {
      body: modifyItem,
      response: {
         201: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Body: {
            firstName: string
            lastName: string
            dateOfBirth: string
            email: string
            username: string
            password: string
         }
      }>,
      reply: FastifyReply
   ) => {
      if (request.session.authenticated === true) {
         try {
            const { firstName, lastName, dateOfBirth, email, username, password } = request.body
            // Perform password hashing
            const hashedPassword = await fastify.bcrypt.hash(password)

            // CREATE Admin
            const addAdmin = await prisma.admin.create({
               data: {
                  firstName: String(firstName),
                  lastName: String(lastName),
                  dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                  email: String(email),
                  username: String(username),
                  password: String(hashedPassword),
               },
            })

            if (!addAdmin) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(addAdmin)
            // console.log("Created new Admin successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
