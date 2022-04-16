import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from './booking.type'

// GET A Booking
export const booking = {
    schema: {
        response: {
            200: Items
        }
    },
    handler: async (request: FastifyRequest<{
        Params: { id: string }
    }>, reply: FastifyReply) => {
        try {
            const { id } = request.params

            // GET Book by ID
            const booking = await prisma.booking.findUnique({
                where: { bookingID: String(id) },
            })

            if (!booking) {
                reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(booking)
            console.log('Read A Booking successfully!')

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
    }
}
