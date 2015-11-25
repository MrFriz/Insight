angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'record',
            {
                url: '/record/:id',
                template: require('./record.html'),
                controller: require('./record.js')
            }
        )
    });

