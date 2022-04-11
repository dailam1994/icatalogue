"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.modifyItem = exports.Items = void 0;
exports.Items = {
    type: "object",
    properties: {
        availabilityID: { type: 'string' },
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' }
    }
};
exports.modifyItem = {
    type: 'object',
    required: ['date', 'startTime', 'endTime'],
    properties: {
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' }
    },
};
exports.deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
};
