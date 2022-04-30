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
exports.appointmentRouter = void 0;
const appointment_user_1 = require("./appointment.user");
const appointment_booking_1 = require("./appointment.booking");
const appointment_today_1 = require("./appointment.today");
const appointment_upcoming_1 = require("./appointment.upcoming");
const appointment_history_1 = require("./appointment.history");
// Routes for Appointments
const appointmentRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/appointment/booking/:id", appointment_booking_1.appointmentBookingId);
    fastify.get("/api/appointment/user/:id", appointment_user_1.appointmentUserId);
    fastify.get("/api/appointment/history", appointment_history_1.appointmentHistory);
    fastify.get("/api/appointment/upcoming", appointment_upcoming_1.appointmentUpcoming);
    fastify.get("/api/appointment/today", appointment_today_1.appointmentToday);
});
exports.appointmentRouter = appointmentRouter;
