class SelectTeamController {
    constructor(game, $state) {
        "ngInject"
        this.game = game;
        this._state = $state;
    }

    selectTeam(team) {
        console.log('select team', team);
        this._state.go('^.selectPlayers')
    }
}


module.exports = SelectTeamController;
