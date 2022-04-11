"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.fastify = void 0;
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const fastify_bcrypt_plugin_1 = __importDefault(require("fastify-bcrypt-plugin"));
const fastify_session_1 = __importDefault(require("fastify-session"));
const fastify_cookie_1 = __importDefault(require("fastify-cookie"));
const user_route_1 = require("./entities/user/user.route");
const availability_route_1 = require("./entities/availability/availability.route");
const booking_route_1 = require("./entities/booking/booking.route");
exports.fastify = (0, fastify_1.default)();
exports.prisma = new client_1.PrismaClient();
exports.fastify.register(require('fastify-cors'), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
});
exports.fastify.register(require('fastify-formbody'));
exports.fastify.register(fastify_bcrypt_plugin_1.default, { saltOrRounds: 6 });
exports.fastify.register(fastify_cookie_1.default);
exports.fastify.register(fastify_session_1.default, {
    cookieName: 'sessionId',
    secret: '27b12d17291a1805fd141c9a38d6e1051b0f',
    saveUninitialized: false,
    cookie: {
        domain: 'example.com',
        path: '/',
        secure: false,
        httpOnly: false,
        // maxAge: 30 * 60 * 1000, // 30-minute sessions
        sameSite: 'none'
    },
});
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
exports.fastify.register(user_route_1.userRouter);
exports.fastify.register(availability_route_1.availabilityRouter);
exports.fastify.register(booking_route_1.bookingRouter);
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
