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
exports.recordRouter = void 0;
const record_list_1 = require("./record.list");
const record_single_1 = require("./record.single");
const record_user_1 = require("./record.user");
const record_create_1 = require("./record.create");
const record_update_1 = require("./record.update");
const record_delete_1 = require("./record.delete");
// Routes for Records
const recordRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/records", record_list_1.allRecords);
    fastify.get("/api/record/:id", record_single_1.record);
    fastify.get("/api/record/user/:id", record_user_1.recordUserId);
    fastify.post("/api/record", record_create_1.createRecord);
    fastify.put("/api/record/:id", record_update_1.updateRecord);
    fastify.delete("/api/record/:id", record_delete_1.deleteRecord);
});
exports.recordRouter = recordRouter;
