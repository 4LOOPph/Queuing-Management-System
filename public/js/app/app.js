//inject angular file upload directives and services.
var Que = Que || {};

Que.Controllers = angular.module('Que.controllers', []);
Que.Services = angular.module('Que.services', []);

var config = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "public/views/index.html",
            controller: 'MainCtrl'
        })
        .state('screen', {
            url: "/screen",
            templateUrl: "public/views/QueingScreen.html",
            controller: 'MainCtrl'
        })
        .state('inquiry', {
            url: "/inquiry",
            templateUrl: "public/views/inquiry.html",
            controller: 'MainCtrl'
        })
        .state('controller', {
            url: "/controller",
            templateUrl: "public/views/controller.html",
            controller: 'MainCtrl'
        })

    $urlRouterProvider.otherwise("/main");
}

angular
    .module('Que', ['ui.router', 'Que.controllers', 'Que.services'])
    .config(config);
