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
exports.deleteBlockip = void 0;
const server_1 = require("../../server");
const blockip_type_1 = require("./blockip.type");
// DELETE A Block IP
exports.deleteBlockip = {
    schema: {
        response: {
            200: blockip_type_1.deleteItem,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                const { ip } = request.body;
                console.log(ip);
                // DELETE Blockip by IP
                const deleteBlockip = yield server_1.prisma.blockip.delete({
                    where: {
                        ip: String(ip),
                    },
                });
                if (!deleteBlockip) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(`IP Address ${ip} Unblocked successfully`);
                console.log("Unblocked IP successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
