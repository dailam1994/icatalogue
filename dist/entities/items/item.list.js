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
exports.allItems = void 0;
const server_1 = require("../../server");
const item_type_1 = require("./item.type");
// GET ALL Items
exports.allItems = {
    schema: {
        response: {
            200: {
                type: "array",
                items: item_type_1.Items,
            },
        },
    },
    handler: (_request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // GET ALL Items
            const items = yield server_1.prisma.item.findMany({
                orderBy: {
                    title: "asc",
                },
            });
            if (!items) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(items);
            // console.log("Read ALL Items successfully!")
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
