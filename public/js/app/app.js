//inject angular file upload directives and services.
var Que = Que || {};

Que.Controllers = angular.module('Que.controllers', []);
Que.Services = angular.module('Que.services', []);

var config = function($routeProvider, $httpProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/public/views/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}

angular
    .module('Que', ['Que.controllers','Que.services'])
    .config(config)
