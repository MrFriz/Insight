function HomeProcessController($scope, $stateParams, game) {
    "ngInject"
    $scope.$stateParams = $stateParams;

    $scope.game = game;

    $scope.team1 = {
        name: 'Orange',
        players : [
            'Greg',
            'Gildas',
            'Mitch',
            'Damien'
        ]
    };

    $scope.team2 = {
        name: 'Blue',
        players : [
            'Jerem ',
            'Fab'
        ]
    };
}


module.exports = HomeProcessController;
