// Init an router
const api = require('express').Router()

// Import all the routes
const tasks = require('./tasks')

// Use all these routes in the router
api
  .use('/tasks', tasks)
//.use('/anotherpath', another_routes)

module.exports = api