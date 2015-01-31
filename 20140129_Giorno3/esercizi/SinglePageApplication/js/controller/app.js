var modulo = angular.module('photoApp', []);
 
modulo.config(function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'view/home.html', controller: homeController});
    $routeProvider.when('/contatti',{templateUrl: 'view/contatti.html', controller: contattiController});
    $routeProvider.when('/dovesiamo',{templateUrl: 'view/dovesiamo.html', controller: dovesiamoController});
  $routeProvider.otherwise({redirectTo: '/home'});
});


function homeController($scope)
{
  //$scope.photos = window.photos;
}

function contattiController($scope, $routeParams)
{
    //$scope.photo = window.photos[$routeParams.id - 1];
}
function dovesiamoController($scope, $routeParams)
{
    //$scope.photo = window.photos[$routeParams.id - 1];
}