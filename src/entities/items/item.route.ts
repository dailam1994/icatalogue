import { FastifyInstance } from "fastify"
import { createItem } from "./item.create"
import { deleteItem } from "./item.delete"
import { allItems } from "./item.list"
import { updateItem } from "./item.update"
import { item } from "./item.single"

// Routes for Items
export const itemRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/items", allItems)
   fastify.get("/api/item/:id", item)
   fastify.post("/api/item", createItem)
   fastify.put("/api/item/:id", updateItem)
   fastify.delete("/api/item/:id", deleteItem)
}
