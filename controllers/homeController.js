const Task = require('../models/tasks');

module.exports.home = function(req,res){
  
  Task.find({},function(err,tasks){
    if(err){
      console.log('Error in finding tasks in db');
      return;
    }
    return res.render('home',{
      title : 'TO DO APP',
      task : tasks
    });
  });
}