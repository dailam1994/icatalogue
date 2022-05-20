import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"

// DELETE a Logging
export const deleteLogging = {
   schema: {
      response: 200,
   },
   handler: async (request: FastifyRequest, reply: FastifyReply) => {
      /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
      // Obtaining White List Data
      const whiteListData = await prisma.whitelist.findMany()

      // If Statement to handle if WhiteList data exist
      if (whiteListData.length == 0) {
         console.log("No IP Addresses Whitelisted")
         reply.status(401).send("Error Message: (401) Status")
      } else {
         for (let i of whiteListData) {
            // If statement to verify if the Users IPs exist in the whiteList Array
            if (i.ip.includes(request.ip) || request.ip.startsWith("10.1.")) {
               // Checking if a user is auth and is the correct user role
               try {
                  // DELETE Logging by ID
                  const deleteLogging = await prisma.logging.deleteMany()

                  if (!deleteLogging) {
                     reply.status(400).send("Error Message: (400) Status")
                  }
                  reply.status(200).send(`ALL Loggings deleted successfully`)
                  console.log("Deleted a Record successfully!")
               } catch (error) {
                  reply.status(500).send("Error Message: (500) Status")
                  console.log(error)
               }
            } else {
               console.log("Your IP Address has been blocked from using the service")
            }
         }
      }
   },
}
