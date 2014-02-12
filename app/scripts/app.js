'use strict';

angular.module('example1App', [
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/NewEvent', {
                templateUrl: 'views/NewEvent.html',
                controller: 'NewEventCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
