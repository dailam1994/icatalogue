"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.modifyItem = exports.AllItems = exports.Items = void 0;
/* Record Types and Schema Validations */
exports.Items = {
    type: "object",
    properties: {
        recordID: { type: "string" },
        date: { type: "string" },
        start: { type: "string" },
        end: { type: "string" },
        firstService: { type: "string" || null },
        secondService: { type: "string" || null },
        thirdService: { type: "string" || null },
        fourthService: { type: "string" || null },
        fifthService: { type: "string" || null },
        recordListRecordListID: { type: "string" || null },
    },
};
exports.AllItems = {
    type: "object",
    properties: {
        recordRecordID: { type: "string" || null },
        recordListID: { type: "string" },
        userUserID: { type: "string" },
        record: {
            type: "object",
            properties: {
                recordID: { type: "string" },
                date: { type: "string" },
                start: { type: "string" },
                end: { type: "string" },
                firstService: { type: "string" || null },
                secondService: { type: "string" || null },
                thirdService: { type: "string" || null },
                fourthService: { type: "string" || null },
                fifthService: { type: "string" || null },
                recordListRecordListID: { type: "string" || null },
            },
        },
        user: {
            type: "object",
            properties: {
                firstName: { type: "string" },
                lastName: { type: "string" },
            },
        },
    },
};
exports.modifyItem = {
    type: "object",
    required: ["date", "start", "end", "firstService", "secondService", "thirdService", "fourthService", "fifthService"],
    properties: {
        date: { type: "string" },
        start: { type: "string" },
        end: { type: "string" },
        firstService: { type: "string" || null },
        secondService: { type: "string" || null },
        thirdService: { type: "string" || null },
        fourthService: { type: "string" || null },
        fifthService: { type: "string" || null },
    },
};
exports.deleteItem = {
    type: "object",
    properties: {
        id: { type: "string" },
    },
};
