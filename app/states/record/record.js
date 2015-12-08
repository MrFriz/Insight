function HomeProcessController($scope, game, teams) {
    "ngInject"

    $scope.game = game;

    $scope.teams = teams;

    console.log('teams', teams);

    $scope.createNewTeam = (name) => {
        console.log('createNewTeam()', name);
    }
}


module.exports = HomeProcessController;
