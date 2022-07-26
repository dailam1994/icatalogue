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
exports.deleteItem = void 0;
const server_1 = require("../../server");
const item_type_1 = require("./item.type");
// DELETE an Item
exports.deleteItem = {
    schema: {
        body: item_type_1.removeItem,
        response: {
            200: item_type_1.removeItem,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // if (request.session.authenticated === true) {
        try {
            const { id, title } = request.body;
            console.log(request.body);
            yield server_1.cloudinary.uploader
                .destroy(title, { overwrite: true, invalidate: true })
                .then((reply) => {
                console.log(reply);
            })
                .catch((error) => console.log(error));
            // DELETE Item by ID
            const deleteItem = yield server_1.prisma.item.delete({
                where: { itemID: String(id) },
            });
            if (!deleteItem) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(`Item ${id} deleted successfully`);
            console.log("Deleted Item successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
        // }
        // reply.status(401).send("Error Message: (401) Status")
    }),
};
