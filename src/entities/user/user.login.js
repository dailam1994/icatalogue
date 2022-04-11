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
exports.loginUser = void 0;
const server_1 = require("../../server");
// POST Login User
exports.loginUser = {
    // schema: {
    //     body: loginItem,
    //     response: {
    //         200: loginStatus
    //     },
    // },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(request.session);
        let { username, password } = request.body;
        const user = yield server_1.prisma.user.findUnique({
            where: { username: String(username) }
        });
        let hashedPassword = user === null || user === void 0 ? void 0 : user.password;
        // If Statement to handle password/hashPassword Comparison
        if (yield server_1.fastify.bcrypt.compare(password, hashedPassword)) {
            request.session.authenticated = true;
            let hashedUser = user === null || user === void 0 ? void 0 : user.userID;
            let hashedRole = user === null || user === void 0 ? void 0 : user.roles;
            // Creating User Session data
            request.session.user = {
                userId: hashedUser,
                role: hashedRole,
                username
            };
            console.log(request.session);
            // reply.setCookie('sessionId', 'cookie', {
            //     path: '/'
            // })
            reply.status(200).send({ message: 'Login Successfully!' });
        }
        else {
            reply.status(401).send("Error Message: (401) Status");
        }
        try {
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    })
};
