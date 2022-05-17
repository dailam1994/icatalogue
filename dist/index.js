"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
// Running the server
server_1.fastify.listen(process.env.PORT || 3333, '0.0.0.0', (err, address) => {
    if (err) {
        server_1.fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
});
process.on('SIGTERM', () => process.exit());
