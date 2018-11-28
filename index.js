// Get environment variables
const PORT = process.env.PORT || 3000

// Express app init
const express = require('express'),
      app = express()

// Make possible getting JSON from the requests
const bp = require('body-parser')
app.use(bp.json())

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Use API routes
const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)

// Connect to database
require('./db')

// Listen on defined port from environment or default 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

