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
exports.editWhitelist = void 0;
const validator_1 = __importDefault(require("validator"));
const server_1 = require("../../server");
const whitelist_type_1 = require("./whitelist.type");
// PUT A Whitelist
exports.editWhitelist = {
    schema: {
        body: whitelist_type_1.modifyItem,
        response: {
            200: whitelist_type_1.whitelistItems,
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
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true) {
            console.log("activated");
            try {
                // const { id } = request.params
                const { whitelistID, ip } = request.body;
                console.log(request.body);
                let editWhitelist;
                // Edit Whitelist by ID
                editWhitelist = yield server_1.prisma.whitelist.update({
                    where: { whitelistID: String(whitelistID) },
                    data: {
                        ip: validator_1.default.escape(String(ip)),
                    },
                });
                if (!editWhitelist) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(editWhitelist);
                console.log("Edit Whitelist successfully!");
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
