/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 10.31
 * To change this template use File | Settings | File Templates.
 */

var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/ShowOrder/:orderId', {
                templateUrl: 'pages/show_order.html',
                controller: 'ShowOrderController'
            });
    }
]);


sampleApp.controller('ShowOrderController', function($scope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
});