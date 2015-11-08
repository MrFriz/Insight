module.export = require('angular').module(
    'stats.core',
    [
        require('angular-animate'),
        require('angular-touch'),
        require('angular-ui-router')
    ]
).config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state(
            require('states/home/home').name,
            require('states/home/home').config
        );
});