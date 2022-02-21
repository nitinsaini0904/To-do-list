// Require mongoose library
const mongoose = require('mongoose');

// Connect with the database
mongoose.connect('mongodb://localhost/Todolist_db');

// Check the connection with the database
const db = mongoose.connection;

// if Error in connecting with database display it
db.on('error',console.error.bind(console,('Error in connecting with the db')));

// If success dispal Connected
db.once('open',function(){
  console.log('Connected with database');
});

// exporting the database
module.exports = db;