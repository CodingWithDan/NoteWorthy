const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },

  userId: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },

  dueDate: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
