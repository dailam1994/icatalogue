import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./admin.type"

// DELETE an Admin
export const deleteAdmin = {
   schema: {
      response: {
         200: deleteItem,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Params: { id: string }
      }>,
      reply: FastifyReply
   ) => {
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params

            // DELETE Admin by ID
            const deleteAdmin = await prisma.admin.delete({
               where: { adminID: String(id) },
            })

            if (!deleteAdmin) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(`Admin ${id} deleted successfully`)
            // console.log("Deleted Admin successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
   },
}
