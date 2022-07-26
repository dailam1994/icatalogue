"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.modifyItem = exports.Items = void 0;
/* Item Types and Schema Validations */
exports.Items = {
    type: "object",
    properties: {
        itemID: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        quantity: { type: "number" },
        price: { type: "number" },
        url: { type: "string" },
        date: { type: "string" },
    },
};
exports.modifyItem = {
    type: "object",
    required: ["title", "description", "quantity", "price", "url"],
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        quantity: { type: "number" },
        price: { type: "number" },
        url: { type: "string" },
        date: { type: "string" },
    },
};
exports.removeItem = {
    type: "object",
    properties: {
        id: { type: "string" },
        title: { type: "string" },
    },
};
