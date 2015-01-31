/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 27/01/15
 * Time: 9.37
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module("basicFormValidation", []);

    myApp.controller("defaultCtrl", function($scope) {
        $scope.addUser = function(userDetails) {
            $scope.message = userDetails.name + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
        }

        $scope.message = "Ready";
    });