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
exports.whitelistRouter = void 0;
const whitelist_list_1 = require("./whitelist.list");
const whitelist_create_1 = require("./whitelist.create");
const whitelist_delete_1 = require("./whitelist.delete");
const whitelist_edit_1 = require("./whitelist.edit");
const whitelist_single_1 = require("./whitelist.single");
// Routes for Whitelisting IPs
const whitelistRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/whitelists", whitelist_list_1.allWhitelist);
    fastify.get("/api/whitelist/:id", whitelist_single_1.singleWhitelist);
    fastify.post("/api/whitelist", whitelist_create_1.createWhitelist);
    fastify.put("/api/whitelist/:id", whitelist_edit_1.editWhitelist);
    fastify.delete("/api/whitelist", whitelist_delete_1.deleteWhitelist);
});
exports.whitelistRouter = whitelistRouter;
