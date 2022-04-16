"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.modifyItem = exports.Items = void 0;
/* Book Types and Schema Validations */
exports.Items = {
    type: "object",
    properties: {
        bookingID: { type: 'string' },
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' },
        firstService: { type: 'string' || null },
        secondService: { type: 'string' || null },
        thirdService: { type: 'string' || null },
        fourthService: { type: 'string' || null },
        fifthService: { type: 'string' || null },
        bookingListBookingListID: { type: 'string' || null }
    }
};
exports.modifyItem = {
    type: 'object',
    required: ['date', 'startTime', 'endTime', 'firstService', 'secondService',
        'thirdService', 'fourthService', 'fifthService'],
    properties: {
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' },
        firstService: { type: 'string' || null },
        secondService: { type: 'string' || null },
        thirdService: { type: 'string' || null },
        fourthService: { type: 'string' || null },
        fifthService: { type: 'string' || null },
    },
};
exports.deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
};
