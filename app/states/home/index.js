angular.module(require('insight.module')).
config(function ($stateProvider) {

    function HomeController($state, $rootScope, $scope, $mdDialog, games, DataStore) {

        this.DataStore = DataStore;

        $scope.games = games || [];

        this._mdDialog = $mdDialog;
        this._scope = $scope;
        this._state = $state;


    }

    HomeController.prototype.listGames = function () {
        return this.DataStore.games().then((res) => {
            this._scope.games = res.docs || [];
        });
    }

    HomeController.prototype.openGame = function (id) {
        this._state.go('record', {id: id});
    };

    HomeController.prototype.createGame = function () {

        return this.DataStore.createGame({test: 'test'}).then((game) => {
            this._scope.games.push(game);
        });

    };

    HomeController.prototype.deleteGame = function ($event, id, DataStore) {


        var confirm = this._mdDialog.confirm()
            .clickOutsideToClose(true)
            .title('Suppression')
            .textContent('Êtes-vous sûr de vouloir supprimer le match ?')
            .targetEvent($event)
            .ok('Oui')
            .cancel('Non');

        this._mdDialog.show(confirm)
            .then(() => {
                return this.DataStore.games(id);
            })
            .then((gameDoc) => {
                return this.DataStore.remove(gameDoc);
            })
            .then(()=> {
                return this.listGames();
            });


    };


    $stateProvider.state(
        'home', {
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'ctrl',
            resolve: {
                games: function (DataStore) {
                    return DataStore.games();
                }
            }
        }
    )
});

require('./home.css');
