async function routes (fastify, options) {
    fastify.get('/take', async (request, reply) => { //getting some info which requires auth.
        return { took: 'something probably will be taken.' }
    })
}

export default routes;