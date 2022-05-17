import { FastifyInstance } from "fastify"
import { allWhitelist } from "./whitelist.list"
import { createWhitelist } from "./whitelist.create"
import { deleteWhitelist } from "./whitelist.delete"
import { editWhitelist } from "./whitelist.edit"
import { singleWhitelist } from "./whitelist.single"

// Routes for Whitelisting IPs
export const whitelistRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/whitelists", allWhitelist)
   fastify.get("/api/whitelist/:id", singleWhitelist)
   fastify.post("/api/whitelist", createWhitelist)
   fastify.put("/api/whitelist/:id", editWhitelist)
   fastify.delete("/api/whitelist", deleteWhitelist)
}
