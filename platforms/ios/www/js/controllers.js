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

tvtsControllers.controller('ModelDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.modelId = $routeParams.modelId;

    $http.get('cars/4RunnerStyles.json').success(function(data) {
      	// alert(JSON.stringify(data.Styles));
      	$scope.styles = data.Styles;
    });


  }]);

tvtsControllers.controller('StyleDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  	$scope.styleId = $routeParams.styleId
  	
  }]);
