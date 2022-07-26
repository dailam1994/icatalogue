import { FastifyRequest, FastifyReply } from "fastify"
import { fastify, prisma } from "../../server"
import { loginItem, loginStatus } from "./admin.type"

// POST Login Admin
export const loginAdmin = {
   schema: {
      body: loginItem,
      response: {
         200: loginStatus,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Body: {
            username: string
            password: string
         }
      }>,
      reply: FastifyReply
   ) => {
      try {
         let { username, password } = request.body
         const admin = await prisma.admin.findUnique({
            where: { username: String(username) },
         })

         let hashedPassword = admin?.password as string

         // If Statement to handle password/hashPassword Comparison
         if (await fastify.bcrypt.compare(password, hashedPassword)) {
            // Creating Authentication for User Session
            request.session.authenticated = true

            let hashedAdmin: string | undefined = admin?.adminID

            // Authentication restriction for Session when Use Logs In
            // // Creating addtional User Session data

            request.session.admin = {
               adminId: hashedAdmin,
               username,
            }

            reply.status(200).send({ message: "Login Successfully!" })
         } else {
            reply.status(401).send("Error Message: (401) Status")
         }
      } catch (error) {
         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
