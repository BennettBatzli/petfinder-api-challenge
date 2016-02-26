var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    .when('/dog', {
      templateUrl: '/views/templates/dog.html',
      controller: 'DogController'
    })
    .when('/cat', {
      templateUrl: '/views/templates/cat.html',
      controller: 'CatController'
    })
    .when('/pig', {
      templateUrl: '/views/templates/pig.html',
      controller: 'PigController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);