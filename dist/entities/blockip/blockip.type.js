"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.modifyItem = exports.Items = void 0;
/* Block IP Types and Schema Validations */
exports.Items = {
    type: "object",
    properties: {
        blockipID: { type: "string" },
        ip: { type: "string" },
    },
};
exports.modifyItem = {
    type: "object",
    required: ["ip"],
    properties: {
        ip: {
            type: "string",
            pattern: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
        },
    },
};
exports.deleteItem = {
    type: "object",
    properties: {
        ip: { type: "string" },
    },
};
