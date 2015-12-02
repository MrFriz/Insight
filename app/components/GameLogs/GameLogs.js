var PouchDB = require('pouchdb');
var db = new PouchDB('insight');

db.createIndex({
    index: {
        fields: ['type', 'game', 'team', 'player']
    }
});

angular.module(require('insight.module')).
service(
    'GameLogs',
    function ($q, $log) {


        class GameLogs {
            constructor(game) {
                $log.debug('Create GameLogs', game)
                this._game = game;

            }

            _getset(property, value) {
                if (value === undefined) {
                    return this._game[property];
                }

                $log.info('update game property ', property, name);
                this._game[property] = value;

                return $q.when(db.put(this._game).then(() => {
                    db.get(this._game._id).then((gameDoc) => {
                        this._game = gameDoc
                    })
                }));
            }

            team1(name) {
                return this._getset('team1', name);
            }

            team2(name) {
                return this._getset('team2', name);
            }

            name(name) {

                if (name === undefined) {
                    return this._game.name;
                }

                $log.info('update game name', name);
                this._game.name = name;

                return $q.when(db.put(this._game).then(() => {
                    db.get(this._game._id).then((gameDoc) => {
                        this._game = gameDoc
                    })
                }));
            }

            team(id) {

            }


        }


        this.listGames = function () {
            return $q.when(
                db.find({
                    selector: {type: 'game'}
                })
            );
        };

        this.create = function () {
            return $q.when(
                db.post({
                    type: 'game',
                    create: new Date()
                })
            );
        };

        this.delete = function (id) {
            return $q.when(
                db.get(id).then((doc) => {
                    $log.warn('deleting game [', id, ']');
                    return db.remove(doc);
                }))
        };

        this.get = function (id) {
            $log.info('get() game id [', id, ']');
            return $q.when(
                db.get(id).then(function (gameDoc) {
                    return new GameLogs(gameDoc);
                })
            );
        }
    }
)
;

module.exports = 'GameLogs';
