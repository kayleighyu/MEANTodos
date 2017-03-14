var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  completed: Boolean,
  description: String
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
