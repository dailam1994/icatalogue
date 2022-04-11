import { FastifyInstance } from 'fastify'
import { allBookings } from './booking.list'
import { booking } from './booking.single'
import { createBooking } from './booking.create'
import { updateBooking } from './booking.update'
import { deleteBooking } from './booking.delete'

// Routes for Booking
export const bookingRouter = async (fastify: FastifyInstance) => {
    // RESTapi endpoints
    fastify.get('/api/bookings', allBookings)
    fastify.get('/api/booking/:id', booking)
    fastify.post('/api/booking', createBooking)
    fastify.put('/api/booking/:id', updateBooking)
    fastify.delete('/api/booking/:id', deleteBooking)
}