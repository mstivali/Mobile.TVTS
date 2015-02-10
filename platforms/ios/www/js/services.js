'use strict';

/* Services */

var module = angular.module('testService', ['ngResource']);

module.service('mathService', function(){

    this.add = function(a, b) { return a + b };

    this.subtract = function(a, b) { return a - b };

    this.multiply = function(a, b) { return a * b }; 

    this.divide = function(a, b) { return a / b };
 
});

module.service('CalculatorService', ['mathService', function(MathService){
     
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
 
}]);


module.factory('Vehicle', ['$resource',
  function($resource){
    return $resource('cars/:styleId.json', {}, {
      query: {method:'GET', params:{phoneId:'cars'}, isArray:true}
    });
 }]);

//sample http request using $resource
module.factory('Models', ['$resource',
	function($resource){
		return $resource('https://api.edmunds.com/api/vehicle/v2/toyota/models?state=new&year=2015&view=basic&fmt=json&api_key=27ggjjd3tthkmwh72tjgm52f&submodel=sedan', {},
		{
			query: { method:'GET'}
		});
	}]);

