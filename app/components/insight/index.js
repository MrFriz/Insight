angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'insight',
            {
                abstract: true,
                url: '/insight',
                template: '<ui-view />'
            }
        )
    });

