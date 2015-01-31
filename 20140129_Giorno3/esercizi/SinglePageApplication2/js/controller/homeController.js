/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 10.05
 * To change this template use File | Settings | File Templates.
 */

// create the controller and inject Angular's $scope
angular.module('uiRouteApp', ['ngRoute']).controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});