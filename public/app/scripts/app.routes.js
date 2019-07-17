'use strict';

/**
 * @ngdoc overview
 * @name sampleAngularApp
 * @description
 * # sampleAngularApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularMoment'
  ])
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope._ = window._;
  })
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $stateProvider
      .state('root', {
        views: {
          header: {
            templateUrl: 'views/header.html'
          },
          content: {
            template: '<div ui-view></div>'
          },
          footer: {
            templateUrl: 'views/footer.html',
            controller: 'footerCtrl'
          }
        }
      })
      .state('root.home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .state('root.test', {
        url: '/test',
        templateUrl: 'views/test.html',
        controller: 'homeCtrl'
      })
      .state('error', {
        views: {
          content: {
            template: '<div ui-view></div>'
          }
        }
      })
      .state('error.404', {
        url: '/404',
        templateUrl: '404.html',
      })
      .state('error.000', {
        url: '/000',
        templateUrl: '000.html',
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('');
  });
