angular
    .module(require('insight.module'))
    .config(function ($stateProvider) {

        $stateProvider.state(
            'record',
            {
                url: '/record/:id',
                template: require('./record.html'),
                controller: require('./record.js'),
                resolve: {
                    game: function ($stateParams, GameLogs) {
                        console.log($stateParams);
                        console.log(GameLogs);


                        var game = GameLogs.get($stateParams.id);
                        console.log('game inst', game)
                        return game;
                    }
                }
            }
        )
    });

