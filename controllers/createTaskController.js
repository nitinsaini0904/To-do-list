const Task = require('../models/tasks');
module.exports.cre = function(req,res){
  console.log("Nitin");
  Task.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date
  },function(err,task){
    if(err){
      console.log('Error in creating task');
      return
    }
    console.log("********",task);
    return res.redirect('back');
  });  
}