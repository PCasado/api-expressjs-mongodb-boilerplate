// Get user and password from environment (These are required if the mongod is running with auth required)
const dbuser = process.env.dbuser,
      dbpass = process.env.dbpass
// Get Database Connection URI from environment
const dburi = process.env.dburi || 'mongodb://localhost:27017/test'
// Mongoose's connection
const mongoose = require('mongoose')
mongoose.connect(dburi,{ user: dbuser, pass: dbpass, useNewUrlParser: true }).then(
  () => { console.log('Connected to MongoDB') },
  err => { console.log(`An error has occurred! \n${err}`) }
)

