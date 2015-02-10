'use strict';

/* App Module */

var tvtsApp = angular.module('tvtsApp', [
  'ngRoute',
  'tvtsControllers',
  'tvtsFilters',
  'testService'
]);

tvtsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/models', {
        templateUrl: 'partials/model-list.html',
        controller: 'ModelListCtrl'
      }).
      when('/styles/:modelId', {
        templateUrl: 'partials/model-detail.html',
        controller: 'ModelDetailCtrl'
      }).
      when('/styleDetail/:styleId', {
        templateUrl: 'partials/style-detail.html',
        controller: 'StyleDetailCtrl'
      }).
      otherwise({
        redirectTo: '/models'
      });
  }]);
