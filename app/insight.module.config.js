angular
    .module(require('insight.module'))
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
