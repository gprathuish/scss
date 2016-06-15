'use strict';

/**
* @ngdoc overview
* @name scssApp
* @description
* # scssApp
*
* Main module of the application.
*/
angular
.module('scssApp', [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ngMaterial'
  ])
.config(function ($urlRouterProvider, $stateProvider) {

  $stateProvider.state('panel',{
    url: '/panel',
    templateUrl: 'views/panel.html',
    controller: 'PanelCtrl'
  })
  .state('home',{
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });

  $urlRouterProvider.otherwise('/panel');
}).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('indigo')
  .primaryPalette('indigo')
  .accentPalette('pink');

  $mdThemingProvider.theme('red')
  .primaryPalette('red');

  $mdThemingProvider.theme('deep-purple')
  .primaryPalette('deep-purple');

  $mdThemingProvider.theme('light-blue')
  .primaryPalette('light-blue');

  $mdThemingProvider.theme('teal')
  .primaryPalette('teal');

  $mdThemingProvider.theme('orange')
  .primaryPalette('deep-orange');

  $mdThemingProvider.theme('green')
  .primaryPalette('green');

  $mdThemingProvider.theme('grey')
  .primaryPalette('grey');

  $mdThemingProvider.theme('cyan')
  .primaryPalette('cyan');

  $mdThemingProvider.alwaysWatchTheme(true);
});
