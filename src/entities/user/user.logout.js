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
exports.logoutUser = void 0;
const user_type_1 = require("./user.type");
// POST Logout User
exports.logoutUser = {
    schema: {
        response: {
            200: user_type_1.Items
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(request.session);
        if (!request.session.authenticated) {
            reply.status(400).send("Error Message: (400) Status");
        }
        try {
            // Exiting User Session
            request.destroySession((error) => {
                if (!error) {
                    reply.status(200).send("Successfully Logged Out!");
                }
                reply.status(500).send({ message: 'Error Message: (500) Status' });
            });
        }
        catch (error) {
            reply.status(500).send({ message: "Error Message: (500) Status" });
        }
    })
};
