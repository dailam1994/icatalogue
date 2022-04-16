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
exports.booking = void 0;
const server_1 = require("../../server");
const booking_type_1 = require("./booking.type");
// GET A Booking
exports.booking = {
    schema: {
        response: {
            200: booking_type_1.Items
        }
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            // GET Book by ID
            const booking = yield server_1.prisma.booking.findUnique({
                where: { bookingID: String(id) },
            });
            if (!booking) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(booking);
            console.log('Read A Booking successfully!');
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    })
};
