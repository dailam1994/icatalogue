import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from './booking.type'

// GET ALL Bookings
export const allBookings = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Items
            }
        }
    },
    handler: async (_request: FastifyRequest, reply: FastifyReply) => {
        try {
            // GET ALL Books
            const bookings = await prisma.booking.findMany()

            if (!bookings) {
                reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(bookings)
            console.log('Read ALL Bookings successfully!')

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
    }
}