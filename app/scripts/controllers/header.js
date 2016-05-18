'use strict';

/**
* @ngdoc function
* @name scssApp.controller:HeaderCtrl
* @description
* # HeaderCtrl
* Controller of the scssApp
*/
angular.module('scssApp')
.controller('HeaderCtrl', function ($scope, $location,$mdDialog) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

	$scope.showTabDialog = function(ev) {
		$mdDialog.show({
			controller: 'AuthenticationCtrl',
			templateUrl: 'views/signup.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};

});
