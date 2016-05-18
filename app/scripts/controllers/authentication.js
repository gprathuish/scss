'use strict';

/**
* @ngdoc function
* @name scssApp.controller:AuthenticationCtrl
* @description
* # AuthenticationCtrl
* Controller of the scssApp
*/
angular.module('scssApp')
.controller('AuthenticationCtrl', function ($scope, $mdDialog) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
});
