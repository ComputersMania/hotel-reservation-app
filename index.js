const fastify = require('fastify')()

fastify.get('/', async (req, rep) =>{
  return {
    name: 'Limone',
    type: 'Matrimoniale'
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
