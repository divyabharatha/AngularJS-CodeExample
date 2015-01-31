var myApp = angular.module('FilterInControllerModule', []);

myApp.controller('FilterController', ['filterFilter', '$scope', function(filterFilter,$scope) {
    $scope.query = "";
    $scope.array = [
        {name: 'Tobias'},
        {name: 'Jeff'},
        {name: 'Brian'},
        {name: 'Igor'},
        {name: 'James'},
        {name: 'Brad'}
    ];
    $scope.filteredArray = filterFilter($scope.array, $scope.query);

    $scope.filtra = function filtra(){
        $scope.filteredArray = filterFilter($scope.array, $scope.query);
    };
}]);