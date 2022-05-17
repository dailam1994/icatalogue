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
exports.createUser = void 0;
const validator_1 = __importDefault(require("validator"));
const server_1 = require("../../server");
const user_type_1 = require("./user.type");
// POST A User
exports.createUser = {
    schema: {
        body: user_type_1.modifyItem,
        response: {
            201: user_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
        // // Obtaining White List Data
        // const whiteListData = await prisma.whitelist.findMany()
        // // If Statement to handle if WhiteList data exist
        // if (whiteListData.length == 0) {
        //    console.log("No IP Addresses Whitelisted")
        //    reply.status(401).send("Error Message: (401) Status")
        // } else {
        //    for (let i of whiteListData) {
        //       // If statement to verify if the Users IPs exist in the whiteList Array
        //       if (i.ip.includes(request.ip)) {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                const { firstName, lastName, dateOfBirth, email, username, password, roles } = request.body;
                // Perform password hashing
                const hashedPassword = yield server_1.fastify.bcrypt.hash(validator_1.default.escape(password));
                // CREATE User Account
                const addUser = yield server_1.prisma.user.create({
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
                if (!addUser) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addUser);
                console.log("Created new User successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
        //       } else {
        //          console.log("Your IP Address has been blocked from using the service")
        //       }
        //    }
        // }
    }),
};
