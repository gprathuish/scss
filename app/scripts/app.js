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
  'ngMaterial',
  'ngMdIcons'
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
});
