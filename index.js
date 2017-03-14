var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoRouter = require('./routers/todos.router');

var port = process.env.PORT || 8080;

var mongoURI = process.env.MONGO_URI || require('./secrets').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);

server.use(todoRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
