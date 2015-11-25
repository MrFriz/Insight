function HomeProcessController($scope, $stateParams) {
    "ngInject"
    $scope.$stateParams = $stateParams;

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
