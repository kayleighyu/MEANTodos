var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoRouter = require('./routers/todos.router');

var port = process.env.PORT || 8080;

var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);

server.use(todoRouter);
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('index.html',{root:__dirname + '/public/html'});
}); //when you go to root route /, then run this function

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
