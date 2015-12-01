angular.module(require('insight.module')).
config(function ($stateProvider) {

    function HomeController($state, $rootScope, $scope, GameLogs, $mdDialog, $log) {

        this._log = $log;
        this._mdDialog = $mdDialog;
        this._scope = $scope;

        GameLogs.listGames().then(function (games) {
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

    HomeController.prototype.openGame = function (id) {
        this.i.$state.go('record', {id: id});
    };

    HomeController.prototype.createGame = function () {
        this.i.GameLogs.create()
            .then((gameDoc) => {
                this.openGame(gameDoc.id);
            });
    };

    HomeController.prototype.deleteGame = function ($event, id) {


        var confirm = this._mdDialog.confirm()
            .clickOutsideToClose(true)
            .title('Suppression')
            .textContent('Êtes-vous sûr de vouloir supprimer le match ?')
            .targetEvent($event)
            .ok('Oui')
            .cancel('Non');

        this._mdDialog.show(confirm)
            .then(() => {
                return this.i.GameLogs.delete(id)
            })
            .then(()=> {
                return this.i.GameLogs.listGames()
            })
            .then((games) => {
                this._scope.games = games.docs;
            });


    };


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
