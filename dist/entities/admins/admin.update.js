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
exports.updateAdmin = void 0;
const server_1 = require("../../server");
const admin_type_1 = require("./admin.type");
// PUT an Admin
exports.updateAdmin = {
    schema: {
        body: admin_type_1.modifyItem,
        response: {
            200: admin_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        if (request.session.authenticated === true) {
            try {
                const { id } = request.params;
                const { firstName, lastName, dateOfBirth, email, username, password } = request.body;
                let updateAdmin;
                // If statement to handle if the password requires hashing
                if (!password.startsWith("$2b$06$")) {
                    // Hashing updated user password
                    let hashedPassword = yield server_1.fastify.bcrypt.hash(password);
                    // UPDATE Admin by ID
                    updateAdmin = yield server_1.prisma.admin.update({
                        where: { adminID: String(id) },
                        data: {
                            firstName: String(firstName),
                            lastName: String(lastName),
                            dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                            email: String(email),
                            username: String(username),
                            password: String(hashedPassword),
                        },
                    });
                    if (!updateAdmin) {
                        reply.status(400).send("Error Message: (400) Status");
                    }
                    reply.status(200).send(updateAdmin);
                    // console.log("Updated A Admin successfully!")
                }
                else if (password.startsWith("$2b$06$")) {
                    // UPDATE Admin by ID
                    updateAdmin = yield server_1.prisma.admin.update({
                        where: { adminID: String(id) },
                        data: {
                            firstName: String(firstName),
                            lastName: String(lastName),
                            dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                            email: String(email),
                            username: String(username),
                            password: String(password),
                        },
                    });
                }
                if (!updateAdmin) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(updateAdmin);
                // console.log("Updated Admin successfully!")
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
