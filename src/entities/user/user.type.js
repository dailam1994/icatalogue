"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginStatus = exports.loginItem = exports.deleteItem = exports.modifyItem = exports.Items = void 0;
exports.Items = {
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
};
exports.modifyItem = {
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
};
exports.deleteItem = {
    type: 'object',
    properties: {
        id: { type: 'string' },
    }
};
exports.loginItem = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
    },
};
exports.loginStatus = {
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
    }
};
