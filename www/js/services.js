'use strict';

/* Services */

var module = angular.module('testService', []);

module.service('mathService', function(){
     
    this.add = function(a, b) { return a + b };
 
});