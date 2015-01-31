/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 27/01/15
 * Time: 10.04
 * To change this template use File | Settings | File Templates.
 */
angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {

        $scope.addUser = function (userDetails) {
            if (myForm.$valid) {
                $scope.message = userDetails.name
                    + " (" + userDetails.email + ") ("
                    + userDetails.agreed + ")";
            } else {
                $scope.showValidation = true;
            }
        }

        $scope.message = "Ready";

        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Please enter a value";
                } else if (error.email) {
                    return "Please enter a valid email address";
                }
            }
        }
    });