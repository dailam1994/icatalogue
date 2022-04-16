import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./booking.type"

// DELETE a Booking
export const deleteBooking = {
    schema: {
        response: {
            200: deleteItem
        },
    },
    handler: async (request: FastifyRequest<{
        Params: { id: string },
    }>, reply: FastifyReply) => {
        try {
            const { id } = request.params
            
            // DELETE Book by ID
            const deleteBooking = await prisma.booking.delete({
                where: { bookingID: String(id) }
            })

            if (!deleteBooking) {
                reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(`Booking ${id} deleted successfully`)
            console.log('Deleted a Booking successfully!')

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
    }
}