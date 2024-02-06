import fastifyPlugin from 'fastify-plugin'
import fastifyMysql from '@fastify/mysql'

async function dbConnector (fastify, options) {
    fastify.register(fastifyMysql, {
     connectionString: 'mysql://root@localhost/auth_basics'
    })
}

export default fastifyPlugin(dbConnector)