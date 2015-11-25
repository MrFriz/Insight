angular
    .module(require('insight.module'))
    .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
        //$locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/home');

    });
