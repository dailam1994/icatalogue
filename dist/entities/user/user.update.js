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
exports.updateUser = void 0;
const validator_1 = __importDefault(require("validator"));
const server_1 = require("../../server");
const user_type_1 = require("./user.type");
// PUT A User
exports.updateUser = {
    schema: {
        body: user_type_1.modifyItem,
        response: {
            200: user_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true) {
            try {
                const { id } = request.params;
                const { firstName, lastName, dateOfBirth, email, username, password, roles } = request.body;
                let hashedPassword;
                let updateUser;
                // If statement to handle if the password requires hashing
                if (!password.startsWith("$2b$06$")) {
                    // Hashing updated user password
                    hashedPassword = yield server_1.fastify.bcrypt.hash(password);
                    // UPDATE User by ID
                    updateUser = yield server_1.prisma.user.update({
                        where: { userID: String(id) },
                        data: {
                            firstName: validator_1.default.escape(String(firstName)),
                            lastName: validator_1.default.escape(String(lastName)),
                            dateOfBirth: validator_1.default.escape(String(new Date(dateOfBirth).toISOString())),
                            email: validator_1.default.escape(String(email)),
                            username: validator_1.default.escape(String(username)),
                            password: String(hashedPassword),
                            roles,
                        },
                    });
                    if (!updateUser) {
                        reply.status(400).send("Error Message: (400) Status");
                    }
                    reply.status(200).send(updateUser);
                    console.log("Updated A User successfully!");
                }
                else if (password.startsWith("$2b$06$")) {
                    // UPDATE User by ID
                    updateUser = yield server_1.prisma.user.update({
                        where: { userID: String(id) },
                        data: {
                            firstName: validator_1.default.escape(String(firstName)),
                            lastName: validator_1.default.escape(String(lastName)),
                            dateOfBirth: validator_1.default.escape(String(new Date(dateOfBirth).toISOString())),
                            email: validator_1.default.escape(String(email)),
                            username: validator_1.default.escape(String(username)),
                            password: validator_1.default.escape(String(password)),
                            roles,
                        },
                    });
                    if (!updateUser) {
                        reply.status(400).send("Error Message: (400) Status");
                    }
                    reply.status(200).send(updateUser);
                    console.log("Updated A User successfully!");
                }
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
