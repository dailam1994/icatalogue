"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
/* Logging Types and Schema Validations */
exports.Items = {
    type: "object",
    properties: {
        loggingID: { type: "string" },
        ip: { type: "string" },
        timestamp: { type: "string" },
        username: { type: "string" || null },
        action: { type: "string" },
    },
};
