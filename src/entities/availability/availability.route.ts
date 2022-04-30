import { FastifyInstance } from "fastify"
import { allAvailability } from "./availability.list"
import { availability } from "./availability.single"
import { createAvailability } from "./availability.create"
import { updateAvailability } from "./availability.update"
import { deleteAvailability } from "./availability.delete"
import { availabilityDate } from "./availability.date"

// Routes for Availability
export const availabilityRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/availability/date/:date", availabilityDate)
   fastify.get("/api/availabilities", allAvailability)
   fastify.get("/api/availability/:id", availability)
   fastify.post("/api/availability", createAvailability)
   fastify.put("/api/availability/:id", updateAvailability)
   fastify.delete("/api/availability/:id", deleteAvailability)
}
