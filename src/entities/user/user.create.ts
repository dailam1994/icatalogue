import { FastifyRequest, FastifyReply } from "fastify"
import { Role } from "@prisma/client"
import validator from "validator"
import { fastify, prisma } from "../../server"
import { modifyItem, Items } from "./user.type"

type roles = keyof typeof Role

// POST A User
export const createUser = {
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
            roles: roles
         }
      }>,
      reply: FastifyReply
   ) => {
      /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
      // Obtaining White List Data
      const whiteListData = await prisma.whitelist.findMany()

      // If Statement to handle if WhiteList data exist
      if (whiteListData.length == 0) {
         console.log("No IP Addresses Whitelisted")
         reply.status(401).send("Error Message: (401) Status")
      } else {
         for (let i of whiteListData) {
            // If statement to verify if the Users IPs exist in the whiteList Array
            if (i.ip.includes(request.ip) || request.ip.startsWith("10.1.")) {
               // Checking is a user is auth and is the correct user role
               if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
                  try {
                     const { firstName, lastName, dateOfBirth, email, username, password, roles } = request.body

                     // Perform password hashing
                     const hashedPassword = await fastify.bcrypt.hash(validator.escape(password))

                     // CREATE User Account
                     const addUser = await prisma.user.create({
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

                     if (!addUser) {
                        reply.status(400).send("Error Message: (400) Status")
                     }
                     reply.status(200).send(addUser)
                     console.log("Created new User successfully!")
                  } catch (error) {
                     reply.status(500).send("Error Message: (500) Status")
                     console.log(error)
                  }
               }
               reply.status(401).send("Error Message: (401) Status")
            } else {
               console.log("Your IP Address has been blocked from using the service")
            }
         }
      }
   },
}
