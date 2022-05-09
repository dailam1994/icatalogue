import { FastifyInstance } from "fastify"
import { allBlockip } from "./blockip.list"
import { createBlockip } from "./blockip.create"
import { deleteBlockip } from "./blockip.delete"

// Routes for Blocked IPs
export const blockipRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/blockips", allBlockip)
   fastify.post("/api/blockip", createBlockip)
   fastify.delete("/api/blockip", deleteBlockip)
}
