myApp.controller('PigController', ['$scope', '$http', function($scope, $http){
  $scope.data = {};

  function petFinder() {
    var key = '8d496ca16952db637c1c5a8a9680cb49';

    var baseURL = 'http://api.petfinder.com/';
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        $scope.animal = response.data.petfinder.pet;
        console.log($scope.animal);
      }
    );
  }

  petFinder();

}]);