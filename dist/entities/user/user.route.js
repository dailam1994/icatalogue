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
exports.userRouter = void 0;
const user_list_1 = require("./user.list");
const user_single_1 = require("./user.single");
const user_create_1 = require("./user.create");
const user_update_1 = require("./user.update");
const user_delete_1 = require("./user.delete");
const user_login_1 = require("./user.login");
const user_logout_1 = require("./user.logout");
// Routes for User
const userRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get('/api/users', user_list_1.allUsers);
    fastify.get('/api/user/:id', user_single_1.user);
    fastify.post('/api/user', user_create_1.createUser);
    fastify.put('/api/user/:id', user_update_1.updateUser);
    fastify.delete('/api/user/:id', user_delete_1.deleteUser);
    fastify.post('/api/user/login', user_login_1.loginUser);
    fastify.post('/api/user/logout', user_logout_1.logoutUser);
});
exports.userRouter = userRouter;
