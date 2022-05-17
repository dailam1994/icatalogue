import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import fastifyBcrypt from "fastify-bcrypt-plugin"
import fastifySession from "fastify-session"
import fastifyCookie from "fastify-cookie"
import rateLimit from "fastify-rate-limit"
import { userRouter } from "./entities/user/user.route"
import { recordRouter } from "./entities/record/record.route"
import { loggingRouter } from "./entities/logging/logging.route"
import { blockipRouter } from "./entities/blockip/blockip.route"
import { whitelistRouter } from "./entities/whitelist/whitelist.route"

export const fastify = Fastify()
export const prisma = new PrismaClient()

/* Register Plugins */
fastify.register(require("fastify-cors"), {
   origin: "https://technolashes.com",
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
})

fastify.register(require("fastify-formbody"))
fastify.register(fastifyBcrypt, { saltOrRounds: 6 })
fastify.register(fastifyCookie)

// Authentication Restriction
fastify.register(fastifySession, {
   cookieName: "sessionId",
   secret: "27b12d17291a1805fd141c9a38d6e1051b0f",
   saveUninitialized: true,
   cookie: {
      path: "/",
      secure: true, // Turning this on makes sure the HTTPS is a requirement
      httpOnly: false, // Will not send cookie data to HTTP, only HTTPS allowed
      maxAge: 30 * 60 * 1000, // 30-minute sessions removes session automatically after set time
      sameSite: "lax",
   },
})

// Rate Limits
fastify.register(rateLimit, {
   max: 1,
   timeWindow: "1 second",
   // whitelist: ['127.0.0.1']
})

fastify.register(rateLimit, {
   max: 1000,
   timeWindow: "24 hour",
   // whitelist: ['127.0.0.1']
})

/* Register Routes */
fastify.register(userRouter)
fastify.register(recordRouter)
fastify.register(loggingRouter)
fastify.register(blockipRouter)
fastify.register(whitelistRouter)

/* Middleware for preHandler of application */
fastify.addHook("preHandler", async (request, reply) => {
   let userLoggedIn = request.session.user !== undefined
   let allowedURLs = ["/api/user/login", "/api/user/auth"]

   let blockList = []

   // Obtaining Block IP Data
   const blockData = await prisma.blockip.findMany()

   // Looping through each object and adding the ip to an empty Array
   for (let i of blockData) {
      blockList.push(i.ip)
   }

   if (blockList.includes(request.ip)) {
      console.log("Your IP Address has been blocked from using the service")
      reply.redirect("/api/user/login")
   } else {
      // Authentication Restriction
      // Checking if user has logged in
      if (userLoggedIn) {
         // GET User Logging Data by Username
         const loggingData = await prisma.logging.findMany({
            where: {
               username: request.session.user.username,
            },
         })

         // Looping through the logging data
         for (let i of loggingData) {
            // Auto DELETE logging data that becomes stale after 1 day (recommended 10-30days)
            if (new Date(new Date(i.timestamp).setDate(new Date(i.timestamp).getDate() + 1)) < new Date()) {
               await prisma.logging.deleteMany({
                  where: {
                     username: i.username,
                  },
               })
            }
         }

         // CREATE logging feature via every request w.r.t to a logged in user
         await prisma.logging.create({
            data: {
               ip: String(request.ip),
               session: String(JSON.stringify(request.session)),
               username: String(request.session.user.username),
               usertype: String(request.session.user.role),
               timestamp: String(new Date().toISOString()),
               action: String(request.method),
            },
         })
      } else {
         if (!allowedURLs.includes(request.url)) {
            reply.redirect("/api/user/login")
         }
      }
   }
})
