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
exports.appointmentUserId = void 0;
const server_1 = require("../../server");
const appointment_type_1 = require("./appointment.type");
// GET an Appointment by User ID
exports.appointmentUserId = {
    schema: {
        response: {
            200: {
                type: "array",
                items: appointment_type_1.Items,
            },
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const appointment = yield server_1.prisma.bookingList.findMany({
                where: {
                    userUserID: id,
                    booking: {
                        date: {
                            gte: new Date(new Date().setDate(new Date().getDate() - 1)),
                        },
                    },
                },
                orderBy: [
                    {
                        booking: {
                            date: "asc",
                        },
                    },
                    {
                        booking: {
                            startTime: "asc",
                        },
                    },
                ],
                include: {
                    booking: true,
                },
            });
            if (!appointment) {
                reply.status(400).send("Error Message: (400) Status");
            }
            reply.status(200).send(appointment);
            console.log("Read an Appointment successfully!");
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
