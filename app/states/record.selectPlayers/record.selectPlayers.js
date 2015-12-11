class RecordSelectPlayersController {
    constructor(game) {
        "ngInject"
        this.game = game;
    }

    selectTeam(team) {
        console.log('select team', team);
    }
}


module.exports = RecordSelectPlayersController;
