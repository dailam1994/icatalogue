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
exports.loginUser = void 0;
const server_1 = require("../../server");
const validator_1 = __importDefault(require("validator"));
const user_type_1 = require("./user.type");
// POST Login User
exports.loginUser = {
    schema: {
        body: user_type_1.loginItem,
        response: {
            200: user_type_1.loginStatus,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { username, password } = request.body;
            const user = yield server_1.prisma.user.findUnique({
                where: { username: validator_1.default.escape(String(username)) },
            });
            let hashedPassword = user === null || user === void 0 ? void 0 : user.password;
            // If Statement to handle password/hashPassword Comparison
            if (yield server_1.fastify.bcrypt.compare(validator_1.default.escape(password), hashedPassword)) {
                // Creating Authentication for User Session
                request.session.authenticated = true;
                let hashedUser = user === null || user === void 0 ? void 0 : user.userID;
                let hashedRole = user === null || user === void 0 ? void 0 : user.roles;
                // Authentication restriction for Session when Use Logs In
                // Creating addtional User Session data
                request.session.user = {
                    userId: hashedUser,
                    role: hashedRole,
                    username,
                };
                reply.status(200).send({ message: "Login Successfully!" });
            }
            else {
                // CREATE logging feature via every request w.r.t to failed login by a user
                yield server_1.prisma.logging.create({
                    data: {
                        ip: String(request.ip),
                        timestamp: String(new Date().toISOString()),
                        username: validator_1.default.escape(String(username)),
                        action: String(request.method),
                    },
                });
                reply.status(401).send("Error Message: (401) Status");
            }
        }
        catch (error) {
            let { username } = request.body;
            // CREATE logging feature via every request w.r.t to failed login by a non-user
            yield server_1.prisma.logging.create({
                data: {
                    ip: String(request.ip),
                    timestamp: String(new Date().toISOString()),
                    username: validator_1.default.escape(String(username)),
                    action: String(request.method),
                },
            });
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
