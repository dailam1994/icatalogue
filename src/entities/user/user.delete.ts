import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./user.type"

// DELETE A User
export const deleteUser = {
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
                const deleteUser = await prisma.user.delete({
                    where: { userID: String(id) }
                })

                if (!deleteUser) {
                    reply.status(400).send("Error Message: (400) Status")
                }
                reply.status(200).send(`User ${id} deleted successfully`)
                console.log('Deleted A User successfully!')

            } catch (error) {
                reply.status(500).send("Error Message: (500) Status")
                console.log(error)
            }
        }
        reply.status(401).send('Error Message: (401) Status')
    }
}
