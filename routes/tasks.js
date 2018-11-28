// ----------------- NOTE
// This is an example and is not optimized.
// -----------------

// Init router
const tasks = require('express').Router(),
// Import Mongoose's Task model
      model = require('../models/Task')

tasks
// Handle GET 'api/tasks/'
  .get('/', (req, res) => {
    model.find().then(
      (docs) => { res.status(200).json(docs) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })
// Handle GET 'api/tasks/:id'
  .get('/:id', (req, res) => {
    model.findById(req.params.id).then(
      (doc) => { res.status(200).json(doc) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })
// Handle POST 'api/tasks/'
  .post('/', (req, res) => {
    model.create(req.body).then(
      (doc) => { res.status(200).json(doc) },
      (err) => { console.error(err.message); res.status(500).end(err.message); }
    )
  })

module.exports = tasks