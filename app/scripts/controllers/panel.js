'use strict';

/**
 * @ngdoc function
 * @name scssApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the scssApp
 */
angular.module('scssApp')
  .controller('PanelCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.form = {}
  });
