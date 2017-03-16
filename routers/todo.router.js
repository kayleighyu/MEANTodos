var express = require('express');
var todoRouter = express.Router();
var Todo = require('../models/todos.model');

// var newTodo = new Todo({
//   completed: 'true',
//   description: 'First todo'
// });
// newTodo.save(function(err,data){
//   if (err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
todoRouter.get('/todos', function(req, res){
  Todo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

todoRouter.get('/todos/:id', function(req, res){
  Todo.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

todoRouter.post('/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.save(function(err, documents){
    if (err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});

todoRouter.put('/todos/:id', function(req, res){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});

todoRouter.delete('/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});
module.exports = todoRouter;
