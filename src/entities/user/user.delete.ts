import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { deleteItem } from "./user.type"

// DELETE A User
export const deleteUser = {
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
      /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
      //   // Obtaining White List Data
      //   const whiteListData = await prisma.whitelist.findMany()

      //   // If Statement to handle if WhiteList data exist
      //   if (whiteListData.length == 0) {
      //      console.log("No IP Addresses Whitelisted")
      //      reply.status(401).send("Error Message: (401) Status")
      //   } else {
      //      for (let i of whiteListData) {
      //         // If statement to verify if the Users IPs exist in the whiteList Array
      //         if (i.ip.includes(request.ip)) {
      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            const { id } = request.params
            // DELETE User by ID
            const deleteUser = await prisma.user.delete({
               where: { userID: String(id) },
            })

            if (!deleteUser) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(`User ${id} deleted successfully`)
            console.log("Deleted A User successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
      //         } else {
      //            console.log("Your IP Address has been blocked from using the service")
      //         }
      //      }
      //   }
   },
}
