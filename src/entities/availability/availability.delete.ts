import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./availability.type"

// DELETE A Availability
export const deleteAvailability = {
    schema: {
        response: {
            200: deleteItem
        },
    },
    handler: async (request: FastifyRequest<{
        Params: { id: string },
    }>, reply: FastifyReply) => {
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { id } = request.params
                const deleteAvailability = await prisma.availability.delete({
                    where: { availabilityID: String(id) }
                })

                if (!deleteAvailability) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(`Availability ${id} deleted successfully`)
                console.log('Deleted an Availability successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}
