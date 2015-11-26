function HomeController($state, $rootScope, $scope, GameLogs) {

    GameLogs.listGames().then(function (games) {
        console.log(games.docs);
        $scope.games = games.docs;
    });


    // TODO: we need real ID here
    if (!$rootScope.currentID) {
        $rootScope.currentID = 1;
    }


    $scope.$state = $state;
    this.i = {
        $state,
        GameLogs
    };
}

HomeController.prototype.createGame = function () {
    this.i.GameLogs.create()
        .then((gameDoc) => {
            this.i.$state.go('record', {id: gameDoc.id});
        });
};

angular.module(require('insight.module')).
config(function ($stateProvider) {

    $stateProvider.state(
        'home', {
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'ctrl'
        }
    )
});

require('./home.css');
