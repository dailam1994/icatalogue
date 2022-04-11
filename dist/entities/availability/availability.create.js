"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAvailability = void 0;
const server_1 = require("../../server");
const availability_type_1 = require("./availability.type");
// POST an Availability
exports.createAvailability = {
    schema: {
        body: availability_type_1.modifyItem,
        response: {
            201: availability_type_1.Items
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        if (request.session.authenticated === true && request.session.user.role === 'ADMIN') {
            try {
                const { date, startTime, endTime } = request.body;
                const addAvailability = yield server_1.prisma.availability.create({
                    data: {
                        date: String(new Date(date).toISOString()),
                        startTime: String(new Date(`${date} ${startTime}`).toISOString()),
                        endTime: String(new Date(`${date} ${endTime}`).toISOString())
                    }
                });
                if (!addAvailability) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addAvailability);
                console.log('Created new Availability successfully!');
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send('Error Message: (401) Status');
    })
};
