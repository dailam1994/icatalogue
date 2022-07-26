import { FastifyInstance } from "fastify"
import { authAdmin } from "./admin.auth"
import { createAdmin } from "./admin.create"
import { deleteAdmin } from "./admin.delete"
import { allAdmins } from "./admin.list"
import { loginAdmin } from "./admin.login"
import { logoutAdmin } from "./admin.logout"
import { admin } from "./admin.single"
import { updateAdmin } from "./admin.update"

// Routes for Admins
export const adminRouter = async (fastify: FastifyInstance) => {
   // RESTapi endpoints
   fastify.get("/api/admins", allAdmins)
   fastify.get("/api/admin/:id", admin)
   fastify.post("/api/admin", createAdmin)
   fastify.put("/api/admin/:id", updateAdmin)
   fastify.delete("/api/admin/:id", deleteAdmin)
   fastify.post("/api/admin/login", loginAdmin)
   fastify.post("/api/admin/logout", logoutAdmin)
   fastify.get("/api/admin/auth", authAdmin)
}
