"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const fastify_rate_limit_1 = __importDefault(require("fastify-rate-limit"));
const user_route_1 = require("./entities/user/user.route");
const availability_route_1 = require("./entities/availability/availability.route");
const booking_route_1 = require("./entities/booking/booking.route");
const apppointment_route_1 = require("./entities/appointment/apppointment.route");
exports.fastify = (0, fastify_1.default)();
exports.prisma = new client_1.PrismaClient();
/* Register Plugins */
exports.fastify.register(require("fastify-cors"), {
    origin: "https://client-lashes19940827.herokuapp.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
});
exports.fastify.register(require("fastify-formbody"));
exports.fastify.register(fastify_bcrypt_plugin_1.default, { saltOrRounds: 6 });
exports.fastify.register(fastify_cookie_1.default);
exports.fastify.register(fastify_session_1.default, {
    cookieName: "sessionId",
    secret: "27b12d17291a1805fd141c9a38d6e1051b0f",
    saveUninitialized: false,
    cookie: {
        path: "/",
        secure: true,
        httpOnly: false,
        maxAge: 30 * 60 * 1000,
        sameSite: "none",
    },
});
// Rate Limits
exports.fastify.register(fastify_rate_limit_1.default, {
    max: 1,
    timeWindow: "1 second",
    // whitelist: ['127.0.0.1']
});
exports.fastify.register(fastify_rate_limit_1.default, {
    max: 1000,
    timeWindow: "24 hour",
    // whitelist: ['127.0.0.1']
});
/* Register Routes */
exports.fastify.register(user_route_1.userRouter);
exports.fastify.register(availability_route_1.availabilityRouter);
exports.fastify.register(booking_route_1.bookingRouter);
exports.fastify.register(apppointment_route_1.appointmentRouter);
/* Middleware for preHandler of application */
exports.fastify.addHook("preHandler", (request, reply, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userLoggedIn = request.session.user !== undefined;
    // let userLoggedIn = true
    let allowedURLs = ["/api/user/login", "/api/user/auth"];
    // Checking if user has logged in
    if (userLoggedIn) {
        // GET User Logging Data by Username
        const loggingData = yield exports.prisma.logging.findMany({
            where: {
                username: request.session.user.username,
            },
        });
        // Looping through the logging data
        for (let i of loggingData) {
            // Auto DELETE logging data that becomes stale after 1 day (recommended 10-30days)
            if (new Date(new Date(i.timestamp).setDate(new Date(i.timestamp).getDate() + 1)) < new Date()) {
                yield exports.prisma.logging.deleteMany({
                    where: {
                        username: i.username,
                    },
                });
            }
        }
        // CREATE logging feature via every request w.r.t to a logged in user
        yield exports.prisma.logging.create({
            data: {
                ip: String(request.ip),
                session: String(JSON.stringify(request.session)),
                username: String(request.session.user.username),
                usertype: String(request.session.user.role),
                timestamp: String(new Date().toISOString()),
                action: String(request.method),
            },
        });
    }
    else {
        if (allowedURLs.includes(request.url)) {
            next();
        }
        else {
            reply.redirect("/api/user/login");
            next();
        }
    }
}));
