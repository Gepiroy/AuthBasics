async function routes (fastify, options) {
    fastify.post('/register', async (request, reply) => {
        return { token: 'token-will-be-here' }
    })
    fastify.post('/login', async (request, reply) => {
        return { token: 'token-will-be-here' }
    })
}

export default routes;