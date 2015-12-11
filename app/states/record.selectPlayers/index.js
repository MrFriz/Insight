angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'record.selectPlayers',
            {
                template: require('./record.selectPlayers.html'),
                controller: require('./record.selectPlayers.js'),
                controllerAs: 'ctrl'
            }
        )
    });

