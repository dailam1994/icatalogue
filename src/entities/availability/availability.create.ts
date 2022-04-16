import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { modifyItem, Items } from './availability.type'

// POST an Availability
export const createAvailability = {
    schema: {
        body: modifyItem,
        response: {
            201: Items
        },
    },
    handler: async (request: FastifyRequest<{
        Body: {
            date: string,
            startTime: string,
            endTime: string
        }
    }>, reply: FastifyReply) => {
        // Checking is a user is auth and is the correct user role
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { date, startTime, endTime } = request.body;

                // CREATE Availability
                const addAvailability = await prisma.availability.create({
                    data: {
                        date: String(new Date(date).toISOString()),
                        startTime: String(new Date(`${date} ${startTime}`).toISOString()),
                        endTime: String(new Date(`${date} ${endTime}`).toISOString())
                    }
                })

                if (!addAvailability) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(addAvailability)
                console.log('Created new Availability successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}