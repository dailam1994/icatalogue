import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"
import fastifyBcrypt from "fastify-bcrypt-plugin"
import fastifySession from "fastify-session"
import fastifyCookie from "fastify-cookie"
import fastifyStatic from "fastify-static"

import rateLimit from "fastify-rate-limit"
import { itemRouter } from "./entities/items/item.route"
import { adminRouter } from "./entities/admins/admin.route"

export const fastify = Fastify()
const path = require("path")
export const prisma = new PrismaClient()
export const cloudinary = require("cloudinary").v2
export const bcrypt = require("bcryptjs")

/* Register Plugins */
fastify.register(require("fastify-cors"), {
   origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5501",
      "http://localhost:3000",
      "http://0.0.0.0:5173",
   ],
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
   max: 10,
   timeWindow: "0.5 second",
   // whitelist: ['127.0.0.1']
})

fastify.register(rateLimit, {
   max: 500,
   timeWindow: "24 hour",
   // whitelist: ['127.0.0.1']
})

fastify.register(fastifyStatic, {
   root: path.join(__dirname, "dist"),
   prefix: "/dist/", // optional: default '/'
})

fastify.get("/", function (req, reply) {
   reply.redirect("./dist/index.html") // serving a file from a different root location
})

/* Register Routes */
fastify.register(itemRouter)
fastify.register(adminRouter)

/* Middleware for preHandler of application */
fastify.addHook("preHandler", async (request, reply) => {
   let userLoggedIn = request.session.admin !== undefined
   let allowedURLs = [
      "/api/admin/login",
      "/api/admin/auth",
      "/api/items",
      "/dist/index.html",
      "/dist/assets/main.9b0ce834.js",
      "/dist/assets/index.c4722732.css",
      "/dist/assets/admin.route.a3fcd267.js",
   ]

   // Authentication Restriction
   // Checking if user has logged in
   if (userLoggedIn) {
      console.log("Admin Logged In")
   } else {
      if (!allowedURLs.includes(request.url)) {
         reply.redirect("/dist/index.html")
      }
   }
})
