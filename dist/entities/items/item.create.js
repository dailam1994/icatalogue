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
exports.createItem = void 0;
const server_1 = require("../../server");
const item_type_1 = require("./item.type");
// POST an Item
exports.createItem = {
    schema: {
        body: item_type_1.modifyItem,
        response: {
            201: item_type_1.Items,
        },
    },
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        if (request.session.authenticated === true) {
            try {
                const { title, description, quantity, price, url } = request.body;
                let secure_url;
                yield server_1.cloudinary.uploader
                    .upload(url, {
                    public_id: title,
                    transformation: { width: 350, crop: "scale" },
                })
                    .then((reply) => {
                    secure_url = reply.secure_url;
                    console.log(reply);
                })
                    .catch((error) => console.log(error));
                // CREATE Item
                const addItem = yield server_1.prisma.item.create({
                    data: {
                        title: String(title),
                        description: String(description),
                        quantity: Number(quantity),
                        price: Number(price),
                        url: String(secure_url),
                        date: String(new Date().toISOString()),
                    },
                });
                if (!addItem) {
                    reply.status(400).send("Error Message: (400) Status");
                }
                reply.status(200).send(addItem);
                console.log("Created new Item successfully!");
            }
            catch (error) {
                reply.status(500).send("Error Message: (500) Status");
                console.log(error);
            }
        }
        reply.status(401).send("Error Message: (401) Status");
    }),
};
