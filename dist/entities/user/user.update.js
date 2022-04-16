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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const server_1 = require("../../server");
const user_type_1 = require("./user.type");
// PUT A User
exports.updateUser = {
    schema: {
        body: user_type_1.modifyItem,
        response: {
            200: user_type_1.Items
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { id } = request.params;
                const { firstName, lastName, dateOfBirth, email, username, password, roles } = request.body;
                // Hashing updated user password
                let hashedPassword = server_1.fastify.bcrypt.hash(password);
                if (!password.startsWith("$2b$06$")) {
                    hashedPassword = server_1.fastify.bcrypt.hash(password);
                }
                // UPDATE User by ID
                const updateUser = yield server_1.prisma.user.update({
                    where: { userID: String(id) },
                    data: {
                        firstName: String(firstName),
                        lastName: String(lastName),
                        dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                        email: String(email),
                        username: String(username),
                        password: String(hashedPassword),
                        roles
                    }
                });
                if (!updateUser) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(updateUser);
                console.log('Updated A User successfully!');
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send('Error Message: (401) Status');
    })
};
