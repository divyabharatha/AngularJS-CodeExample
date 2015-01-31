/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 27/01/15
 * Time: 10.04
 * To change this template use File | Settings | File Templates.
 */
angular.module("exampleApp", ['Task'])
    .controller("defaultCtrl", function($scope, retriveTasks) {

        retriveTasks.getTask().then(function(data)
        {
                $scope.todos = data;
        });

        $scope.updateTasks = function() {
            $scope.todos  = retriveTasks.getTask();
        };
        $scope.addAction = function(item) {
            if(angular.isDefined(item) && item.trim() !== "")
            {
                var newAction =  {
                    action: item,
                    complete: false
                };
                $scope.todos.push(newAction);
                $scope.newItem = undefined;
            }
        };

        $scope.removeAction = function(index) {
            $scope.todos.splice(index, 1);
        };
    });