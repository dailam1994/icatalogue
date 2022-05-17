"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.modifyItem = exports.Items = exports.whitelistItems = void 0;
/* Whitelist Types and Schema Validations */
exports.whitelistItems = {
    type: "object",
    properties: {
        whitelistID: { type: "string" },
        ip: { type: "string" },
    },
};
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
