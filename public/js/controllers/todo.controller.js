(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

          TodoController.$inject = ['$scope', 'TodoService'];

          function TodoController($scope, TodoService){
            $scope.todos = [];
            $scope.newTodo = {};
            $scope.getTodos = getTodos;
            $scope.addTodo = addTodo;
            $scope.deleteTodo = deleteTodo;

            function deleteTodo(todo){
              TodoService.delete(todo)
                          .then(function(response){
                            //console.log(response);
                            getTodos();
                          });
            }

            function addTodo(newTodo){
              console.log('Creating a new todo...');
              TodoService.create(newTodo)
                        .then(function(response){
                          //console.log(response);
                          getTodos();
                        });
            }

            function getTodos(){
              console.log($scope.todos);
              console.log('Getting the todos...');
              TodoService.getAll()
                        .then(function(response){
                          $scope.todos = response.data.todos;
                        });
            }
        }
})()
