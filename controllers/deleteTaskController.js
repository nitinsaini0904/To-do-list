const Task = require('../models/tasks');

module.exports.deleteTask = function(req,res){
  console.log(req.body);

  // get the id from query
  let id = req.query;

  
  // find number of tasks to be deleted
  var count = Object.keys(id).length;

  // iterate over all the tasks and delete them 
  for( let i = 0; i < count; i++){
    Task.findByIdAndDelete(Object.keys(id)[i],function(err){
      if(err){
        console.log("Error in deleting the task");
        return;
      }
    });
  }
  
  return res.redirect('back');
}