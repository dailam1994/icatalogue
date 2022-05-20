import { FastifyRequest, FastifyReply } from "fastify"
import validator from "validator"
import { prisma } from "../../server"
import { modifyItem, whitelistItems } from "./whitelist.type"

// PUT A Whitelist
export const editWhitelist = {
   schema: {
      body: modifyItem,
      response: {
         200: whitelistItems,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Body: {
            whitelistID: string
            ip: string
         }
      }>,
      reply: FastifyReply
   ) => {
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
               // Checking is a user is auth and is the correct user role
               if (request.session.authenticated === true) {
                  console.log("activated")
                  try {
                     // const { id } = request.params
                     const { whitelistID, ip } = request.body
                     console.log(request.body)

                     let editWhitelist

                     // Edit Whitelist by ID
                     editWhitelist = await prisma.whitelist.update({
                        where: { whitelistID: String(whitelistID) },
                        data: {
                           ip: validator.escape(String(ip)),
                        },
                     })

                     if (!editWhitelist) {
                        reply.status(400).send("Error Message: (400) Status")
                     }
                     reply.status(200).send(editWhitelist)
                     console.log("Edit Whitelist successfully!")
                  } catch (error) {
                     reply.status(500).send("Error Message: (500) Status")
                     console.log(error)
                  }
               }
               reply.status(401).send("Error Message: (401) Status")
            } else {
               console.log("Your IP Address has been blocked from using the service")
            }
         }
      }
   },
}
