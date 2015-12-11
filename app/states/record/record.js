function RecordController($scope, game, teams, DataStore) {
    "ngInject"

    this.DataStore = DataStore;
    this.game = game;

    $scope.updateTime = function(time) {
        $scope.time = time;
        $scope.$digest();
    }

}


RecordController.prototype.updateGame = function () {
    return this.DataStore._put(this.game).then((updatedGame) => {
        this.game = updatedGame;
    });
};


module.exports = RecordController;
