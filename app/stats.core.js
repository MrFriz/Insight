var app = require('angular').module(
    'stats.core',
    [
        require('angular-animate'),
        require('angular-touch'),
        require('angular-ui-router')
    ]
)

app.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state(
                require('states/home/home').name,
                require('states/home/home').config
            );
    });

module.exports = app;