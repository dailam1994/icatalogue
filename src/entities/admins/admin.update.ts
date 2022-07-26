import { FastifyRequest, FastifyReply } from "fastify"
import { fastify, prisma } from "../../server"
import { Items, modifyItem } from "./admin.type"

// PUT an Admin
export const updateAdmin = {
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
            const { id } = request.params
            const { firstName, lastName, dateOfBirth, email, username, password } = request.body
            let updateAdmin

            // If statement to handle if the password requires hashing
            if (!password.startsWith("$2b$06$")) {
               // Hashing updated user password
               let hashedPassword = await fastify.bcrypt.hash(password)

               // UPDATE Admin by ID
               updateAdmin = await prisma.admin.update({
                  where: { adminID: String(id) },
                  data: {
                     firstName: String(firstName),
                     lastName: String(lastName),
                     dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                     email: String(email),
                     username: String(username),
                     password: String(hashedPassword),
                  },
               })

               if (!updateAdmin) {
                  reply.status(400).send("Error Message: (400) Status")
               }
               reply.status(200).send(updateAdmin)
               // console.log("Updated A Admin successfully!")
            } else if (password.startsWith("$2b$06$")) {
               // UPDATE Admin by ID
               updateAdmin = await prisma.admin.update({
                  where: { adminID: String(id) },
                  data: {
                     firstName: String(firstName),
                     lastName: String(lastName),
                     dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                     email: String(email),
                     username: String(username),
                     password: String(password),
                  },
               })
            }

            if (!updateAdmin) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(updateAdmin)
            // console.log("Updated Admin successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
