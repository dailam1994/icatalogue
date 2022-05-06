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
exports.updateAvailability = void 0;
const server_1 = require("../../server");
const availability_type_1 = require("./availability.type");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// PUT an Availability
exports.updateAvailability = {
    schema: {
        body: availability_type_1.modifyItem,
        response: {
            200: availability_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
            try {
                const { id } = request.params;
                const { date, startTime, endTime } = request.body;
                // UPDATE Availability by ID
                const updateAvailability = yield server_1.prisma.availability.update({
                    where: { availabilityID: String(id) },
                    data: {
                        date: String(new Date(date).toISOString()),
                        startTime: String((0, moment_timezone_1.default)(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
                        endTime: String((0, moment_timezone_1.default)(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
                    },
                });
                // console.log(startTime)
                // console.log(moment.tz(`${date} ${startTime}`, "Australia/Brisbane").format())
                // console.log(moment().toDate())
                // console.log(moment(`${date} ${startTime}`).toDate())
                // console.log(moment(`${date} ${startTime}`).add(10, "hours").toDate())
                // console.log(moment().toDate().toLocaleTimeString())
                // console.log(moment(`${date} ${startTime}`).toDate().toLocaleTimeString())
                // console.log(new Date(`${date} ${startTime}`).toISOString())
                // console.log(new Date(`${date} ${startTime}`).toISOString())
                if (!updateAvailability) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(updateAvailability);
                console.log("Updated an availability successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
