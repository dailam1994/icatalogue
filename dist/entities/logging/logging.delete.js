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
exports.deleteLogging = void 0;
const server_1 = require("../../server");
// DELETE a Logging
exports.deleteLogging = {
    schema: {
        response: 200,
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
        // Checking if a user is auth and is the correct user role
        try {
            // DELETE Logging by ID
            const deleteLogging = yield server_1.prisma.logging.deleteMany();
            if (!deleteLogging) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(`ALL Loggings deleted successfully`);
            console.log("Deleted a Record successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
        //       } else {
        //          console.log("Your IP Address has been blocked from using the service")
        //       }
        //    }
        // }
    }),
};
