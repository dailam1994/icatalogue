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
exports.updateRecord = void 0;
const server_1 = require("../../server");
const record_type_1 = require("./record.type");
// PUT A Record
exports.updateRecord = {
    schema: {
        body: record_type_1.modifyItem,
        response: {
            200: record_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const { date, start, end, firstService, secondService, thirdService, fourthService, fifthService } = request.body;
            // UPDATE Record by ID
            const updateRecord = yield server_1.prisma.record.update({
                where: { recordID: String(id) },
                data: {
                    date: String(date),
                    start: String(start),
                    end: String(end),
                    firstService: String(firstService),
                    secondService: String(secondService),
                    thirdService: String(thirdService),
                    fourthService: String(fourthService),
                    fifthService: String(fifthService),
                },
            });
            if (!updateRecord) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(updateRecord);
            console.log("Updated a Record successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
