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
exports.createRecord = void 0;
const server_1 = require("../../server");
const validator_1 = __importDefault(require("validator"));
const record_type_1 = require("./record.type");
// POST A Record
exports.createRecord = {
    schema: {
        body: record_type_1.modifyItem,
        response: {
            201: record_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { date, start, end, firstService, secondService, thirdService, fourthService, fifthService } = request.body;
            console.log(request.body);
            //  CREATE Record
            const addRecord = yield server_1.prisma.record.create({
                data: {
                    date: validator_1.default.escape(String(date)),
                    start: validator_1.default.escape(String(start)),
                    end: validator_1.default.escape(String(end)),
                    firstService: validator_1.default.escape(String(firstService)),
                    secondService: validator_1.default.escape(String(secondService)),
                    thirdService: validator_1.default.escape(String(thirdService)),
                    fourthService: validator_1.default.escape(String(fourthService)),
                    fifthService: validator_1.default.escape(String(fifthService)),
                },
            });
            // GET ALL Records by Date/Time
            const id = yield server_1.prisma.record.findMany({
                where: {
                    date: validator_1.default.escape(String(date)),
                    start: validator_1.default.escape(String(start)),
                    end: validator_1.default.escape(String(end)),
                },
            });
            // CREATE Record List
            yield server_1.prisma.recordList.create({
                data: {
                    recordRecordID: String(id[0].recordID),
                    userUserID: request.session.user.userId,
                },
            });
            if (!addRecord) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(addRecord);
            console.log("Created new Booking successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
