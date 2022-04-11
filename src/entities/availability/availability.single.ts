import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from './availability.type'

// GET an Availability
export const availability = {
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
            const availability = await prisma.availability.findUnique({
                where: { availabilityID: String(id) },
            })

            if (!availability) {
                reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(availability)
            console.log('Read an Availability successfully!')

        } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
        }
    }
}
