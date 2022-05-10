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
exports.allLoggings = void 0;
const server_1 = require("../../server");
const logging_type_1 = require("./logging.type");
// GET ALL Loggings
exports.allLoggings = {
    schema: {
        response: {
            200: {
                type: "array",
                items: logging_type_1.Items,
            },
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
        //   // Obtaining White List Data
        //   const whiteListData = await prisma.whitelist.findMany()
        //   // If Statement to handle if WhiteList data exist
        //   if (whiteListData.length == 0) {
        //      console.log("No IP Addresses Whitelisted")
        //      reply.status(401).send("Error Message: (401) Status")
        //   } else {
        //      for (let i of whiteListData) {
        //         // If statement to verify if the Users IPs exist in the whiteList Array
        //         if (i.ip.includes(request.ip)) {
        // Checking if a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                // GET ALL Loggings
                const loggings = yield server_1.prisma.logging.findMany({
                    where: {
                        usertype: null,
                    },
                });
                if (!loggings) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(loggings);
                console.log("Read ALL Loggings successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
        //         } else {
        //            console.log("Your IP Address has been blocked from using the service")
        //         }
        //      }
        //   }
    }),
};
