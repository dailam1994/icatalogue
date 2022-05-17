import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import { Items } from "./whitelist.type"

// GET A Whitelist
export const singleWhitelist = {
   schema: {
      response: {
         200: Items,
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
      if (request.session.authenticated === true) {
         try {
            const { id } = request.params

            // GET Whitelist by ID
            const whitelist = await prisma.whitelist.findUnique({
               where: { whitelistID: String(id) },
            })

            if (!whitelist) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(whitelist)
            console.log("Read Single Whitelist successfully!")
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
