/* Availability Types and Schema Validations */
export const Items = {
    type: "object",
    properties: {
        availabilityID: { type: 'string' },
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' }
    }
}

export const modifyItem = {
    type: 'object',
    required: ['date', 'startTime', 'endTime'],
    properties: {
        date: { type: 'string' },
        startTime: { type: 'string' },
        endTime: { type: 'string' }
    },
}

export const deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
}