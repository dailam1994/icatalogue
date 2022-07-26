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
exports.cloudinary = exports.prisma = exports.fastify = void 0;
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const fastify_bcrypt_plugin_1 = __importDefault(require("fastify-bcrypt-plugin"));
const fastify_session_1 = __importDefault(require("fastify-session"));
const fastify_cookie_1 = __importDefault(require("fastify-cookie"));
const fastify_static_1 = __importDefault(require("fastify-static"));
const fastify_rate_limit_1 = __importDefault(require("fastify-rate-limit"));
const item_route_1 = require("./entities/items/item.route");
const admin_route_1 = require("./entities/admins/admin.route");
exports.fastify = (0, fastify_1.default)({
    bodyLimit: 10000000,
});
const path = require("path");
exports.prisma = new client_1.PrismaClient();
exports.cloudinary = require("cloudinary").v2;
/* Register Plugins */
exports.fastify.register(require("fastify-cors"), {
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5501",
        "http://localhost:3000",
        "http://0.0.0.0:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
});
exports.fastify.register(require("fastify-formbody"));
exports.fastify.register(fastify_bcrypt_plugin_1.default, { saltOrRounds: 6 });
exports.fastify.register(fastify_cookie_1.default);
// Authentication Restriction
exports.fastify.register(fastify_session_1.default, {
    cookieName: "sessionId",
    secret: "27b12d17291a1805fd141c9a38d6e1051b0f",
    saveUninitialized: true,
    cookie: {
        path: "/",
        secure: false,
        httpOnly: false,
        maxAge: 30 * 60 * 1000,
        sameSite: "lax",
    },
});
// Rate Limits
exports.fastify.register(fastify_rate_limit_1.default, {
    max: 10,
    timeWindow: "0.5 second",
    // whitelist: ['127.0.0.1']
});
exports.fastify.register(fastify_rate_limit_1.default, {
    max: 500,
    timeWindow: "24 hour",
    // whitelist: ['127.0.0.1']
});
exports.fastify.register(fastify_static_1.default, {
    root: path.join(__dirname, "dist"),
    prefix: "/dist/", // optional: default '/'
});
exports.fastify.get("/", function (req, reply) {
    reply.redirect("./dist/index.html"); // serving a file from a different root location
});
/* Register Routes */
exports.fastify.register(item_route_1.itemRouter);
exports.fastify.register(admin_route_1.adminRouter);
/* Middleware for preHandler of application */
exports.fastify.addHook("preHandler", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    let userLoggedIn = request.session.admin !== undefined;
    let allowedURLs = [
        "/api/admin/login",
        "/api/admin/auth",
        "/api/items",
        "/dist/index.html",
        "/dist/assets/main.bd0fa817.js",
        "/dist/assets/index.c4722732.css",
        "/dist/assets/admin.route.a8d45ade.js", // Update this on frontend rebuild
    ];
    // Authentication Restriction
    // Checking if user has logged in
    if (userLoggedIn) {
        console.log("Admin Logged In");
    }
    else {
        if (!allowedURLs.includes(request.url)) {
            reply.redirect("/dist/index.html");
        }
    }
}));
