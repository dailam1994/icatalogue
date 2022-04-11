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
exports.bookingRouter = void 0;
const booking_list_1 = require("./booking.list");
const booking_single_1 = require("./booking.single");
const booking_create_1 = require("./booking.create");
const booking_update_1 = require("./booking.update");
const booking_delete_1 = require("./booking.delete");
// Routes for Booking
const bookingRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get('/api/bookings', booking_list_1.allBookings);
    fastify.get('/api/booking/:id', booking_single_1.booking);
    fastify.post('/api/booking', booking_create_1.createBooking);
    fastify.put('/api/booking/:id', booking_update_1.updateBooking);
    fastify.delete('/api/booking/:id', booking_delete_1.deleteBooking);
});
exports.bookingRouter = bookingRouter;
