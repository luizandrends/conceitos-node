const express = require('express')

const routes = express()

routes.use(express.json())

routes.get('/', (request, response) => {
  return response.json({ hello: 'world' })
})

module.exports = routes