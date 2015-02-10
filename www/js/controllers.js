'use strict';

/* Controllers */

var tvtsControllers = angular.module('tvtsControllers', []);

tvtsControllers.controller('ModelListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('cars/cars.json').success(function(data) {
      $scope.models = data;
    });

    $scope.orderProp = 'age';

  }]);

tvtsControllers.controller('ModelDetailCtrl', ['$scope', '$http', '$routeParams', 'mathService',
  function($scope, $http, $routeParams, mathService) {
    $scope.modelId = $routeParams.modelId;

    alert(mathService.add(1,3));

    $http.get('cars/4RunnerStyles.json').success(function(data) {
      	// alert(JSON.stringify(data.Styles));
      	$scope.styles = data.Styles;
    });

  }]);

tvtsControllers.controller('StyleDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  	$scope.styleId = $routeParams.styleId

    $http.get('cars/' + '4-Runner-Data' + '.json').success(function(data) {
      // alert(JSON.stringify(data.Engines));
      // alert(JSON.stringify(data.transmissions));
      $scope.engines = data.Engines;
      $scope.transmissions = data.transmissions;
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  	
  }]);
