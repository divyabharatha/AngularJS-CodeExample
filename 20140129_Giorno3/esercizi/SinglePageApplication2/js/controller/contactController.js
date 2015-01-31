/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 10.06
 * To change this template use File | Settings | File Templates.
 */

angular.module('uiRouteApp', ['ngRoute']).controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});