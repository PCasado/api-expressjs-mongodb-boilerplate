// ----------------- NOTE
// This is an example and is not optimized.
// -----------------

// Import mongoose object and Schema class
const mongoose = require('mongoose'),
      Schema = mongoose.Schema

// Define Task schema
const Task = new Schema({
  name: { type: String, required: true },
  priority: { type: Number, default: 0, min: 0, max: 2 },
  created_at: { type: Date, default: Date.now() }
})

// Generate and register the Mongoose model from the schema
const taskModel = mongoose.model('Task', Task)

module.exports = taskModel