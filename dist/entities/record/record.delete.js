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
exports.deleteRecord = void 0;
const server_1 = require("../../server");
const record_type_1 = require("./record.type");
// DELETE a Record
exports.deleteRecord = {
    schema: {
        response: {
            200: record_type_1.deleteItem,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            // DELETE Record by ID
            const deleteRecord = yield server_1.prisma.record.delete({
                where: { recordID: String(id) },
            });
            if (!deleteRecord) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(`Record ${id} deleted successfully`);
            console.log("Deleted a Record successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};