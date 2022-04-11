import { fastify } from './server'

// Running the server
fastify.listen(process.env.PORT || 3333, '0.0.0.0', (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server is now listening on ${address}`)
})

process.on('SIGTERM', () => process.exit())