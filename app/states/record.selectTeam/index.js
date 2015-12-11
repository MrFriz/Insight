angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'record.selectTeam',
            {
                template: require('./record.selectTeam.html'),
                controller: require('./record.selectTeam.js'),
                controllerAs: 'ctrl'
            }
        )
    });

