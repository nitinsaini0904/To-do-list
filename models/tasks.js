const mongoose = require('mongoose');

// Define the Schema
const tasksSchema = new mongoose.Schema({
  description : {
    type : String,
    required : true
  },
  category : {
    type : String,
    required : true
  },
  date : {
    type : Date,
  }
});

// Set it as collection
const Task = mongoose.model('Task',tasksSchema);

// Export the collection
module.exports = Task;