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
exports.createBooking = void 0;
const server_1 = require("../../server");
const booking_type_1 = require("./booking.type");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// POST A Booking
exports.createBooking = {
    schema: {
        body: booking_type_1.modifyItem,
        response: {
            201: booking_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { date, startTime, endTime, firstService, secondService, thirdService, fourthService, fifthService } = request.body;
            // console.log(new Date(`${date} ${startTime}`).toISOString())
            // console.log(moment(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString())
            // console.log(new Date(`${date} ${endTime}`).toISOString())
            // console.log(moment(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString())
            //  CREATE Book
            const addBooking = yield server_1.prisma.booking.create({
                data: {
                    date: String(new Date(date).toISOString()),
                    startTime: String((0, moment_timezone_1.default)(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
                    endTime: String((0, moment_timezone_1.default)(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
                    firstService: String(firstService),
                    secondService: String(secondService),
                    thirdService: String(thirdService),
                    fourthService: String(fourthService),
                    fifthService: String(fifthService),
                },
            });
            // GET ALL Books by Date/Time
            const id = yield server_1.prisma.booking.findMany({
                where: {
                    date: String(new Date(date).toISOString()),
                    startTime: String((0, moment_timezone_1.default)(`${date} ${startTime}`).subtract(10, "hours").toDate().toISOString()),
                    endTime: String((0, moment_timezone_1.default)(`${date} ${endTime}`).subtract(10, "hours").toDate().toISOString()),
                },
            });
            // CREATE Booking List
            yield server_1.prisma.bookingList.create({
                data: {
                    bookingBookingID: String(id[0].bookingID),
                    userUserID: request.session.user.userId,
                },
            });
            if (!addBooking) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(addBooking);
            console.log("Created new Booking successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
