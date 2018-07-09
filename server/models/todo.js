
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text:{type: String},
  _owner:{type: mongoose.Schema.Types.ObjectId, ref:'User'}  
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;