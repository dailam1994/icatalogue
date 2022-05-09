import { FastifyRequest, FastifyReply } from "fastify"
import { fastify, prisma } from "../../server"
import validator from "validator"
import { loginItem, loginStatus } from "./user.type"

// POST Login User
export const loginUser = {
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
         const user = await prisma.user.findUnique({
            where: { username: validator.escape(String(username)) },
         })

         let hashedPassword = user?.password as string

         // If Statement to handle password/hashPassword Comparison
         if (await fastify.bcrypt.compare(validator.escape(password), hashedPassword)) {
            // Creating Authentication for User Session
            request.session.authenticated = true
            let hashedUser: string | undefined = user?.userID
            let hashedRole: string | undefined = user?.roles

            // Creating addtional User Session data
            request.session.user = {
               userId: hashedUser,
               role: hashedRole,
               username,
            }

            reply.status(200).send({ message: "Login Successfully!" })
         } else {
            // CREATE logging feature via every request w.r.t to failed login by a user
            await prisma.logging.create({
               data: {
                  ip: String(request.ip),
                  timestamp: String(new Date().toISOString()),
                  username: validator.escape(String(username)),
                  action: String(request.method),
               },
            })

            reply.status(401).send("Error Message: (401) Status")
         }
      } catch (error) {
         let { username } = request.body
         // CREATE logging feature via every request w.r.t to failed login by a non-user
         await prisma.logging.create({
            data: {
               ip: String(request.ip),
               timestamp: String(new Date().toISOString()),
               username: validator.escape(String(username)),
               action: String(request.method),
            },
         })

         reply.status(500).send("Error Message: (500) Status")
         console.log(error)
      }
   },
}
