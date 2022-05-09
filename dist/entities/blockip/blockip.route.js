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
exports.blockipRouter = void 0;
const blockip_list_1 = require("./blockip.list");
const blockip_create_1 = require("./blockip.create");
const blockip_delete_1 = require("./blockip.delete");
// Routes for Blocked IPs
const blockipRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/blockips", blockip_list_1.allBlockip);
    fastify.post("/api/blockip", blockip_create_1.createBlockip);
    fastify.delete("/api/blockip", blockip_delete_1.deleteBlockip);
});
exports.blockipRouter = blockipRouter;
