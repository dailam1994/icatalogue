"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const admin_auth_1 = require("./admin.auth");
const admin_create_1 = require("./admin.create");
const admin_delete_1 = require("./admin.delete");
const admin_list_1 = require("./admin.list");
const admin_login_1 = require("./admin.login");
const admin_logout_1 = require("./admin.logout");
const admin_single_1 = require("./admin.single");
const admin_update_1 = require("./admin.update");
// Routes for Admins
const adminRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/admins", admin_list_1.allAdmins);
    fastify.get("/api/admin/:id", admin_single_1.admin);
    fastify.post("/api/admin", admin_create_1.createAdmin);
    fastify.put("/api/admin/:id", admin_update_1.updateAdmin);
    fastify.delete("/api/admin/:id", admin_delete_1.deleteAdmin);
    fastify.post("/api/admin/login", admin_login_1.loginAdmin);
    fastify.post("/api/admin/logout", admin_logout_1.logoutAdmin);
    fastify.get("/api/admin/auth", admin_auth_1.authAdmin);
});
exports.adminRouter = adminRouter;
