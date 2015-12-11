class RecordController {
    constructor($scope, game, teams, DataStore) {
        "ngInject"

        this.DataStore = DataStore;
        this.game = game;

        $scope.updateTime = function (time) {
            $scope.time = time;
            $scope.$digest();
        }

    }

    updateGame() {
        return this.DataStore._put(this.game).then((updatedGame) => {
            this.game = updatedGame;
        });
    };


}

module.exports = RecordController;
