/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 27/01/15
 * Time: 10.04
 * To change this template use File | Settings | File Templates.
 */
angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope) {
        $scope.addUser = function(userDetails) {
            if(angular.isDefined(userDetails.name)){
                $scope.message = userDetails.name + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
            }
        };
        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Perfavore aggiungi ";
                } else if (error.email) {
                    return "Please enter a valid email address";
                }
            }
        };

        $scope.message = "Ready";
    });