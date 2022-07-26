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
exports.createAdmin = void 0;
const server_1 = require("../../server");
const admin_type_1 = require("./admin.type");
// POST an Admin
exports.createAdmin = {
    schema: {
        body: admin_type_1.modifyItem,
        response: {
            201: admin_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        if (request.session.authenticated === true) {
            try {
                const { firstName, lastName, dateOfBirth, email, username, password } = request.body;
                // Perform password hashing
                const hashedPassword = yield server_1.fastify.bcrypt.hash(password);
                // CREATE Admin
                const addAdmin = yield server_1.prisma.admin.create({
                    data: {
                        firstName: String(firstName),
                        lastName: String(lastName),
                        dateOfBirth: String(new Date(dateOfBirth).toISOString()),
                        email: String(email),
                        username: String(username),
                        password: String(hashedPassword),
                    },
                });
                if (!addAdmin) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addAdmin);
                // console.log("Created new Admin successfully!")
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
