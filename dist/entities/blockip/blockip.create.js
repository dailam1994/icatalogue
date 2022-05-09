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
exports.createBlockip = void 0;
const server_1 = require("../../server");
const validator_1 = __importDefault(require("validator"));
const blockip_type_1 = require("./blockip.type");
// POST A Block IP
exports.createBlockip = {
    schema: {
        body: blockip_type_1.modifyItem,
        response: {
            201: blockip_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                const { ip } = request.body;
                // CREATE User Account
                const addBlockip = yield server_1.prisma.blockip.create({
                    data: {
                        ip: validator_1.default.escape(String(ip)),
                    },
                });
                if (!addBlockip) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addBlockip);
                console.log("Blocked and IP successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};