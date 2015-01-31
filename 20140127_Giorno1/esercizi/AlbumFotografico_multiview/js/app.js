var modulo = angular.module('photoApp', []);
 
modulo.config(function($routeProvider) {
  $routeProvider.when('/photos', {templateUrl: 'photo-list.html', controller: PhotoListCtrl});
  $routeProvider.when('/photos/:id',{templateUrl: 'photo-detail.html', controller: PhotoDetailCtrl});
  $routeProvider.otherwise({redirectTo: '/photos'});
});


function PhotoListCtrl($scope) 
{
  $scope.photos = window.photos;
}

function PhotoDetailCtrl($scope, $routeParams)
{
  $scope.photo = window.photos[$routeParams.id - 1];
}