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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const validator_1 = __importDefault(require("validator"));
const server_1 = require("../../server");
const admin_type_1 = require("./admin.type");
// POST Login Admin
exports.loginAdmin = {
    schema: {
        body: admin_type_1.loginItem,
        response: {
            200: admin_type_1.loginStatus,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { username, password } = request.body;
            // Obtaining Unqiue Admin User
            const admin = yield server_1.prisma.admin.findUnique({
                where: { username: validator_1.default.escape(String(username)) },
            });
            let hashedPassword = admin === null || admin === void 0 ? void 0 : admin.password;
            // If Statement to handle password/hashPassword Comparison
            if (yield server_1.fastify.bcrypt.compare(validator_1.default.escape(password), hashedPassword)) {
                let hashedAdmin = admin === null || admin === void 0 ? void 0 : admin.adminID;
                // Creating Authentication for User Session and Admin Data
                request.session.authenticated = true;
                request.session.admin = {
                    adminId: hashedAdmin,
                    username,
                };
                reply.status(200).send({ message: "Login Successfully!" });
            }
            else {
                reply.status(401).send("Error Message: (401) Status");
            }
        }
        catch (error) {
            reply.status(500).send("Error Message: (500) Status");
            console.log(error);
        }
    }),
};
