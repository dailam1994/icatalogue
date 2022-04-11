export const Items = {
    type: "object",
    properties: {
        userID: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dateOfBirth: { type: 'string' },
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        roles: { type: 'string' }
    }
}

export const modifyItem = {
    type: 'object',
    required: ['firstName', 'lastName', 'dateOfBirth', 'email', 'username', 'password', 'roles'],
    properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dateOfBirth: { type: 'string' },
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        roles: {
            type: 'string',
            enum: ['ADMIN', 'CLIENT']
        },
    },
}

export const deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
}

export const loginItem = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
    },
}

export const loginStatus = {
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
    }
}
