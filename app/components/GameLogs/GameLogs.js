
var PouchDD = require('pouchdb');

class GameLogs {
    constructor(id) {
        this._db = new PouchDD(id);
    }

    name(name) {
        if (!name) {
            return 'yo les mais';
        }

        return 'pasyo les amis';
    }
}

angular.module(require('insight.module')).
service(
    'GameLogs',
    function ($log) {
        this.get = function (id) {
            return new GameLogs(id);
        }
    }
);

module.exports = 'GameLogs';
