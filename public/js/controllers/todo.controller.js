(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

          TodoController.$inject = ['$scope', 'TodoService'];

          function TodoController($scope, TodoService){
            $scope.todos = [];
            $scope.newTodo = {};
            $scope.addTodo = addTodo;
            $scope.deleteTodo = deleteTodo;
            $scope.update = update;
            $scope.edit = edit;
            getTodos();
            function deleteTodo(todo){
              TodoService.delete(todo)
                          .then(function(response){
                            //console.log(response);
                            getTodos();
                          });
            }

            function edit(todo){
              console.log('editing...');
              todo.edit = true;
            }

            function update(todo){
              console.log('updating...');
              todo.edit = false;
              TodoService.update(todo)
                        .then(function(response){
                          getTodos();
                        });
            }

            function addTodo(newTodo){
              console.log('Creating a new todo...');
              TodoService.create(newTodo)
                        .then(function(response){
                          //console.log(response);
                          getTodos();
                          $scope.newTodo = {};
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
