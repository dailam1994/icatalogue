import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import fastifyBcrypt from 'fastify-bcrypt-plugin'
import fastifySession from 'fastify-session'
import fastifyCookie from 'fastify-cookie'
import rateLimit from 'fastify-rate-limit'
import { userRouter } from './entities/user/user.route'
import { availabilityRouter } from './entities/availability/availability.route'
import { bookingRouter } from './entities/booking/booking.route'

export const fastify = Fastify()
export const prisma = new PrismaClient()
fastify.register(require('fastify-cors'), {
    origin: 'https://ux19940827.herokuapp.com/login',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})

fastify.register(require('fastify-formbody'))
fastify.register(fastifyBcrypt, { saltOrRounds: 6 })
fastify.register(fastifyCookie)
fastify.register(fastifySession, {
    cookieName: 'sessionId',
    secret: '27b12d17291a1805fd141c9a38d6e1051b0f',
    saveUninitialized: false,
    cookie: {
        path: '/',
        secure: false,
        httpOnly: false,
        // maxAge: 30 * 60 * 1000, // 30-minute sessions
        sameSite: ''
    },
})
// fastify.register(rateLimit, {
//     max: 1,
//     timeWindow: '1 second',
//     // whitelist: ['127.0.0.1']
// })
// fastify.register(rateLimit, {
//     max: 1000,
//     timeWindow: '24 hour',
//     // whitelist: ['127.0.0.1']
// })

fastify.register(userRouter)
fastify.register(availabilityRouter)
fastify.register(bookingRouter)

// fastify.addHook('preHandler', (request, reply, next) => {
//     let userLoggedIn = request.session.user !== undefined
//     // let userLoggedIn = true
//     let allowedURLs = ['/api/user/login']

//     if (userLoggedIn) {
//         let loggingFeature = {
//             session: request.session,
//             ipAddress: request.ip,
//             time: new Date(),
//             action: request.method
//         }

//         console.log(loggingFeature)
//         next()
//     } else {
//         if (allowedURLs.includes(request.url)) {
//             next()
//         } else {
//             reply.redirect('/api/user/login')
//         }
//     }
// })
