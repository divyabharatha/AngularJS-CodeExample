/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 10.05
 * To change this template use File | Settings | File Templates.
 */

angular.module('uiRouteApp', ['ngRoute']).controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});