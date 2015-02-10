'use strict';

/* Controllers */

var tvtsControllers = angular.module('tvtsControllers', []);

tvtsControllers.controller('ModelListCtrl', 
  ['$scope', '$http', 'Vehicle',
  function($scope, $http, Vehicle) {

    $http.get('cars/cars.json').success(function(data) {
      $scope.models = data;
    });

    $scope.orderProp = 'age';

}]);

tvtsControllers.controller('ModelDetailCtrl', 
  ['$scope', '$http', '$routeParams', 'Vehicle',
  function($scope, $http, $routeParams, Vehicle) {
    $scope.modelId = $routeParams.modelId;

    Vehicle.get({styleId: '4RunnerStyles'}, function(vehicle) {
        $scope.styles = vehicle.Styles;
    });

}]);

tvtsControllers.controller('StyleDetailCtrl', 
  ['$scope', '$http', '$routeParams', 'Vehicle',
  function($scope, $http, $routeParams, Vehicle) {

  	$scope.styleId = $routeParams.styleId //will use later
    
    //stleId is temporarily hardcoded
    Vehicle.get({styleId: '4-Runner-Data'}, function(vehicle) {
      $scope.phone = vehicle;
      $scope.engines = vehicle.Engines;
      $scope.transmissions = vehicle.transmissions;
      $scope.mainImageUrl = vehicle.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  	
}]);
