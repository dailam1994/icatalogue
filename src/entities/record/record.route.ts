import { FastifyInstance } from "fastify"
import { allRecords } from "./record.list"
import { record } from "./record.single"
import { recordUserId } from "./record.user"
import { createRecord } from "./record.create"
import { updateRecord } from "./record.update"
import { deleteRecord } from "./record.delete"

// Routes for Records
export const recordRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/records", allRecords)
   fastify.get("/api/record/:id", record)
   fastify.get("/api/record/user/:id", recordUserId)
   fastify.post("/api/record", createRecord)
   fastify.put("/api/record/:id", updateRecord)
   fastify.delete("/api/record/:id", deleteRecord)
}
