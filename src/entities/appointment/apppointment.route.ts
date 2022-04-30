import { FastifyInstance } from "fastify"
import { appointmentUserId } from "./appointment.user"
import { appointmentBookingId } from "./appointment.booking"
import { appointmentToday } from "./appointment.today"
import { appointmentUpcoming } from "./appointment.upcoming"
import { appointmentHistory } from "./appointment.history"

// Routes for Appointments
export const appointmentRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/appointment/booking/:id", appointmentBookingId)
   fastify.get("/api/appointment/user/:id", appointmentUserId)
   fastify.get("/api/appointment/history", appointmentHistory)
   fastify.get("/api/appointment/upcoming", appointmentUpcoming)
   fastify.get("/api/appointment/today", appointmentToday)
}
