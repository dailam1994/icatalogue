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
exports.createBooking = void 0;
const server_1 = require("../../server");
const booking_type_1 = require("./booking.type");
// POST A Booking
exports.createBooking = {
    schema: {
        body: booking_type_1.modifyItem,
        response: {
            201: booking_type_1.Items
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { date, startTime, endTime, firstService, secondService, thirdService, fourthService, fifthService } = request.body;
            // CREATE Book
            const addBooking = yield server_1.prisma.booking.create({
                data: {
                    date: String(new Date(date).toISOString()),
                    startTime: String(new Date(`${date} ${startTime}`).toISOString()),
                    endTime: String(new Date(`${date} ${endTime}`).toISOString()),
                    firstService: String(firstService),
                    secondService: String(secondService),
                    thirdService: String(thirdService),
                    fourthService: String(fourthService),
                    fifthService: String(fifthService),
                }
            });
            // GET ALL Books by Date/Time      
            const id = yield server_1.prisma.booking.findMany({
                where: {
                    date: String(new Date(date).toISOString()),
                    startTime: String(new Date(`${date} ${startTime}`).toISOString()),
                    endTime: String(new Date(`${date} ${endTime}`).toISOString()),
                }
            });
            // CREATE Booking List
            yield server_1.prisma.bookingList.create({
                data: {
                    bookingBookingID: String(id[0].bookingID)
                }
            });
            if (!addBooking) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(addBooking);
            console.log('Created new Booking successfully!');
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    })
};
