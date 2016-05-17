'use strict';

/**
* @ngdoc function
* @name scssApp.controller:HeaderCtrl
* @description
* # HeaderCtrl
* Controller of the scssApp
*/
angular.module('scssApp')
.controller('HeaderCtrl', function ($scope, $location) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};
});
