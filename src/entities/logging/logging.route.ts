import { FastifyInstance } from "fastify"
import { allLoggings } from "./logging.list"
import { deleteLogging } from "./logging.delete"

// Routes for Loggings
export const loggingRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/loggings", allLoggings)
   fastify.delete("/api/loggings", deleteLogging)
}
