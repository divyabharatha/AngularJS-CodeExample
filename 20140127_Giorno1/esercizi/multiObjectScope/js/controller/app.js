var myApp = angular.module('name',[]);


myApp.controller('creaAppellativo', ['$scope', function($scope) {


    $scope.doAppellativo = function()
    {
        $scope.appellativo = $scope.name + "   " + $scope.surname;
    };
}]);