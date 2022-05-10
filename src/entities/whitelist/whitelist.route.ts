import { FastifyInstance } from "fastify"
import { allWhitelist } from "./whitelist.list"
import { createWhitelist } from "./whitelist.create"
import { deleteWhitelist } from "./whitelist.delete"

// Routes for Whitelisting IPs
export const whitelistRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/whitelists", allWhitelist)
   fastify.post("/api/whitelist", createWhitelist)
   fastify.delete("/api/whitelist", deleteWhitelist)
}
