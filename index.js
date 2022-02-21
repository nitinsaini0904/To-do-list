const express = require('express');
const app = express();
const port = 7000;
// To use excrypted data
app.use(express.urlencoded());
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

// Setting up view engine and views
app.set('view engine','ejs');
app.set('views','./views');


// Adding the database
const db = require('./config/mongoose');
const Task = require('./models/tasks');

// To add static file(CSS)
app.use(express.static('assets'));

// Calling the router
app.use('/',require('./routers'));

app.listen(port,function(err){
  if(err){
    console.log('Error in loading server : ',err);
    return;
  }

  console.log('Server is running on port : ',port);
});