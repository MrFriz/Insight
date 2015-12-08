angular.module(require('insight.module')).
config(function ($stateProvider) {

    function HomeController($state, $rootScope, $scope, $mdDialog, games, teams, DataStore) {

        this.DataStore = DataStore;

        $scope.games = games || [];
        $scope.teams = teams || [];

        this._mdDialog = $mdDialog;
        this._scope = $scope;
        this._state = $state;


    }

    HomeController.prototype.listTeams = function () {
        return this.DataStore.teams().then((res) => {

            console.log('listTeam.then', res);

            this._scope.teams = res || [];
        });
    };

    HomeController.prototype.listGames = function () {
        return this.DataStore.games().then((res) => {
            this._scope.games = res || [];
        });
    };

    HomeController.prototype.openGame = function (id) {
        this._state.go('record', {id: id});
    };

    HomeController.prototype.createGame = function () {
        return this.DataStore.createGame().then((game) => {
            this._scope.games.push(game);
        });
    };

    HomeController.prototype.createTeam = function (name) {

        console.log('createTeam(', name, ')');

        return this.DataStore.createTeam(name).then((team) => {
            this._scope.teams.push(team);
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
                return this.DataStore.games(id);
            })
            .then((gameDoc) => {
                return this.DataStore.remove(gameDoc);
            })
            .then(()=> {
                return this.listGames();
            });


    };

    HomeController.prototype.deleteTeam = function ($event, id) {


        var confirm = this._mdDialog.confirm()
            .clickOutsideToClose(true)
            .title('Suppression')
            .textContent('Êtes-vous sûr de vouloir supprimer cette équipe ?')
            .targetEvent($event)
            .ok('Oui')
            .cancel('Non');

        this._mdDialog.show(confirm)
            .then(() => {
                return this.DataStore.teams(id);
            })
            .then((teamDoc) => {
                return this.DataStore.remove(teamDoc);
            })
            .then(()=> {
                return this.listTeams();
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
                },
                teams: function (DataStore) {
                    return DataStore.teams();
                }
            }
        }
    )
});

require('./home.css');
