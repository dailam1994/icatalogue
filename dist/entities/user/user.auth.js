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
exports.authUser = void 0;
const user_type_1 = require("./user.type");
// GET Auth User
exports.authUser = {
    schema: {
        response: {
            200: user_type_1.authStatus
        }
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Creating data for handling session
            const session = request.session;
            reply.status(200).send(session);
            // console.log('Read Auth User successfully!')
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
        reply.status(401).send('Error Message: (401) Status');
    })
};
