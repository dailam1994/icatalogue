import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import fastifyBcrypt from "fastify-bcrypt-plugin"
import fastifySession from "fastify-session"
import fastifyCookie from "fastify-cookie"
import rateLimit from "fastify-rate-limit"
import { userRouter } from "./entities/user/user.route"
import { availabilityRouter } from "./entities/availability/availability.route"
import { bookingRouter } from "./entities/booking/booking.route"
import { appointmentRouter } from "./entities/appointment/apppointment.route"

export const fastify = Fastify()
export const prisma = new PrismaClient()

/* Register Plugins */
fastify.register(require("fastify-cors"), {
   origin: ["https://client-lashes19940827.herokuapp.com"],
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
})

fastify.register(require("fastify-formbody"))
fastify.register(fastifyBcrypt, { saltOrRounds: 6 })
fastify.register(fastifyCookie)
fastify.register(fastifySession, {
   cookieName: "sessionId",
   secret: "27b12d17291a1805fd141c9a38d6e1051b0f",
   saveUninitialized: false,
   cookie: {
      path: "/",
      secure: true,
      httpOnly: false,
      // maxAge: 30 * 60 * 1000, // 30-minute sessions
      sameSite: "none",
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
fastify.register(availabilityRouter)
fastify.register(bookingRouter)
fastify.register(appointmentRouter)

/* Middleware for preHandler of application */
fastify.addHook("preHandler", async (request, reply, next) => {
   let userLoggedIn = request.session.user !== undefined
   // let userLoggedIn = true
   let allowedURLs = ["/api/user/login", "/api/user/auth"]

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
      if (allowedURLs.includes(request.url)) {
         next()
      } else {
         reply.redirect("/api/user/login")
         next()
      }
   }
})
