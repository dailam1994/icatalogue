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
exports.availabilityRouter = void 0;
const availability_list_1 = require("./availability.list");
const availability_single_1 = require("./availability.single");
const availability_create_1 = require("./availability.create");
const availability_update_1 = require("./availability.update");
const availability_delete_1 = require("./availability.delete");
const availability_date_1 = require("./availability.date");
// Routes for Availability
const availabilityRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    // RESTapi endpoints
    fastify.get("/api/availability/date/:date", availability_date_1.availabilityDate);
    fastify.get("/api/availabilities", availability_list_1.allAvailability);
    fastify.get("/api/availability/:id", availability_single_1.availability);
    fastify.post("/api/availability", availability_create_1.createAvailability);
    fastify.put("/api/availability/:id", availability_update_1.updateAvailability);
    fastify.delete("/api/availability/:id", availability_delete_1.deleteAvailability);
});
exports.availabilityRouter = availabilityRouter;
