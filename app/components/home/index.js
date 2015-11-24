angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'home',
            {
                url: '/home',
                template: require('./home.html'),
                controller: require('./home')
            }
        )
    });

require('./home.css');
