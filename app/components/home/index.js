angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'home',
            {
                url: '/',
                template: require('./home.html'),
                controller: require('./home')
            }
        )
    });

require('./home.css');
