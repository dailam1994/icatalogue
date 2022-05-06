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
exports.createAvailability = void 0;
const server_1 = require("../../server");
const availability_type_1 = require("./availability.type");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// POST an Availability
exports.createAvailability = {
    schema: {
        body: availability_type_1.modifyItem,
        response: {
            201: availability_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                const { date, startTime, endTime } = request.body;
                // CREATE Availability
                const addAvailability = yield server_1.prisma.availability.create({
                    data: {
                        date: String(new Date(date).toISOString()),
                        startTime: String((0, moment_timezone_1.default)(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
                        endTime: String((0, moment_timezone_1.default)(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
                    },
                });
                if (!addAvailability) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addAvailability);
                console.log("Created new Availability successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
