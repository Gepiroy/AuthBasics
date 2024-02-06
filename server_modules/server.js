import Fastify from 'fastify'
import routeAuth from './routes/routeAuth.js'
import routeInteract from './routes/routeInteract.js'

const fastify = Fastify({
    logger: true
})

fastify.register(routeAuth)
fastify.register(routeInteract)

fastify.listen({ address: '0.0.0.0', port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})