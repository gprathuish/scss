'use strict';

/**
* @ngdoc function
* @name scssApp.controller:HeaderCtrl
* @description
* # HeaderCtrl
* Controller of the scssApp
*/
angular.module('scssApp')
.controller('HeaderCtrl', function ($scope, $location,$mdDialog, $timeout, $mdSidenav, $log) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	//
	$scope.theme = 'indigo';
	$scope.changeTheme = function(color) {
		console.log(color)
		$scope.theme = color; 
	};


	$scope.toggleRight = buildToggler('left-menu');
	$scope.isOpenRight = function(){
		return $mdSidenav('left-menu').isOpen();
	};

	function buildDelayedToggler(navID) {
		return debounce(function() {
			$mdSidenav(navID)
			.toggle()
			.then(function () {
				$log.debug("toggle " + navID + " is done");
			});
		}, 200);
	}
	function buildToggler(navID) {
		return function() {
			$mdSidenav(navID)
			.toggle()
			.then(function () {
				$log.debug("toggle " + navID + " is done");
			});
		}
	}

	$scope.close = function () {
		$mdSidenav('left-menu').close()
		.then(function () {
			$log.debug("close LEFT is done");
		});
	};


	$scope.signup = function(ev) {
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

	$scope.signin = function(ev) {
		$mdDialog.show({
			controller: 'AuthenticationCtrl',
			templateUrl: 'views/signin.html',
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
