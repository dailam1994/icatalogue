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
exports.item = void 0;
const server_1 = require("../../server");
const item_type_1 = require("./item.type");
// GET an Item
exports.item = {
    schema: {
        response: {
            200: item_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            // GET Item by ID
            const item = yield server_1.prisma.item.findUnique({
                where: { itemID: String(id) },
            });
            if (!item) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(item);
            // console.log("Read Item successfully!")
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
