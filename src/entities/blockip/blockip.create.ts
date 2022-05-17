import { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../server"
import validator from "validator"
import { modifyItem, Items } from "./blockip.type"

// POST A Block IP
export const createBlockip = {
   schema: {
      body: modifyItem,
      response: {
         201: Items,
      },
   },
   handler: async (
      request: FastifyRequest<{
         Body: {
            ip: string
         }
      }>,
      reply: FastifyReply
   ) => {
      // /* WARNING DO NOT UNCOMMENT WHITELISTING IN UNLESS IMPLMENTING */
      // // Obtaining White List Data
      // const whiteListData = await prisma.whitelist.findMany()

      // // If Statement to handle if WhiteList data exist
      // if (whiteListData.length == 0) {
      //    console.log("No IP Addresses Whitelisted")
      //    reply.status(401).send("Error Message: (401) Status")
      // } else {
      //    for (let i of whiteListData) {
      //       // If statement to verify if the Users IPs exist in the whiteList Array
      //       if (i.ip.includes(request.ip)) {

      // Checking is a user is auth and is the correct user role
      if (request.session.authenticated === true && request.session.user.role === "ADMIN") {
         try {
            const { ip } = request.body

            // CREATE Blockip
            const addBlockip = await prisma.blockip.create({
               data: {
                  ip: validator.escape(String(ip)),
               },
            })

            if (!addBlockip) {
               reply.status(400).send("Error Message: (400) Status")
            }
            reply.status(200).send(addBlockip)
            console.log("Blocked IP successfully!")
         } catch (error) {
            reply.status(500).send("Error Message: (500) Status")
            console.log(error)
         }
      }
      reply.status(401).send("Error Message: (401) Status")
      //       } else {
      //          console.log("Your IP Address has been blocked from using the service")
      //       }
      //    }
      // }
   },
}
