import { FastifyRequest, FastifyReply } from "fastify"
import { Role } from "@prisma/client"
import validator from "validator"
import { fastify, prisma } from "../../server"
import { Items, modifyItem } from "./user.type"

type roles = keyof typeof Role

// PUT A User
export const updateUser = {
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
            roles: roles
         }
      }>,
      reply: FastifyReply
   ) => {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params
            const { firstName, lastName, dateOfBirth, email, username, password, roles } = request.body
            console.log(request.body)
            let hashedPassword
            let updateUser

            // If statement to handle if the password requires hashing
            if (!password.startsWith("$2b$06$")) {
               // Hashing updated user password
               hashedPassword = await fastify.bcrypt.hash(password)

               // UPDATE User by ID
               updateUser = await prisma.user.update({
                  where: { userID: String(id) },
                  data: {
                     firstName: validator.escape(String(firstName)),
                     lastName: validator.escape(String(lastName)),
                     dateOfBirth: validator.escape(String(new Date(dateOfBirth).toISOString())),
                     email: validator.escape(String(email)),
                     username: validator.escape(String(username)),
                     password: String(hashedPassword),
                     roles,
                  },
               })

               if (!updateUser) {
                  reply.status(400).send("Error Message: (400) Status")
               }
               reply.status(200).send(updateUser)
               console.log("Updated A User successfully!")
            } else if (password.startsWith("$2b$06$")) {
               // UPDATE User by ID
               updateUser = await prisma.user.update({
                  where: { userID: String(id) },
                  data: {
                     firstName: validator.escape(String(firstName)),
                     lastName: validator.escape(String(lastName)),
                     dateOfBirth: validator.escape(String(new Date(dateOfBirth).toISOString())),
                     email: validator.escape(String(email)),
                     username: validator.escape(String(username)),
                     password: String(password),
                     roles,
                  },
               })

               if (!updateUser) {
                  reply.status(400).send("Error Message: (400) Status")
               }
               reply.status(200).send(updateUser)
               console.log("Updated A User successfully!")
            }
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
