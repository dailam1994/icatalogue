export const Items = {
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
}

export const modifyItem = {
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
}

export const deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
}