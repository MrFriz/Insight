function RecordController($scope, game, teams, DataStore) {
    "ngInject"

    this.DataStore = DataStore;
    this.game = game;
    this.teams = teams;

    if (this.game.team1) {
        this.DataStore.teams(this.game.team1).then(
            (team) => {
                $scope.team1 = team;
            }
        )
    }

    if (this.game.team2) {
        this.DataStore.teams(this.game.team2).then(
            (team) => {
                $scope.team2 = team;
            }
        )
    }


    $scope.createNewTeam = (name) => {
        console.log('createNewTeam()', name);
    }
}

RecordController.prototype.updateTeam = function (team, isTeam2) {
    var teamProps = isTeam2 ? 'team2' : 'team1';

    var teamId = team ? team._id : undefined;

    // fail early
    if (!team && !this.game[teamProps]) return;
    if (team && team._id === this.game[teamProps]) return;


    this.DataStore.games(this.game._id)
        .then((game) => {
            game[teamProps] = team ? team._id : undefined;
            return this.DataStore._put(game)
        })
        .then((res) => {
            return this.DataStore.games(res.id);
        })
        .then((game)=> {
            this.game = game;
        })

};


module.exports = RecordController;
