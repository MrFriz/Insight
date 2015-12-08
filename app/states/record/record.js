function HomeProcessController($scope, game, teams) {
    "ngInject"

    $scope.game = game;

    $scope.teams = ['blue', 'red', 'bluish'];

    console.log('teams', teams);

    $scope.createNewTeam = (name) => {
        console.log('createNewTeam()', name);
    }
}


module.exports = HomeProcessController;
