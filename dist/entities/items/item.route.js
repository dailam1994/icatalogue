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
exports.itemRouter = void 0;
const item_create_1 = require("./item.create");
const item_delete_1 = require("./item.delete");
const item_list_1 = require("./item.list");
const item_update_1 = require("./item.update");
const item_single_1 = require("./item.single");
// Routes for Items
const itemRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/items", item_list_1.allItems);
    fastify.get("/api/item/:id", item_single_1.item);
    fastify.post("/api/item", item_create_1.createItem);
    fastify.put("/api/item/:id", item_update_1.updateItem);
    fastify.delete("/api/item/:id", item_delete_1.deleteItem);
});
exports.itemRouter = itemRouter;
