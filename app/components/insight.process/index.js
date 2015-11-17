angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'home.process',
            {
                url: '/insight/process/:videoType',
                template: require('./insight.process.html'),
                controller: require('./insight.process.js')
            }
        )
    });

