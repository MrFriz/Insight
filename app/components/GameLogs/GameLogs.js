var PouchDB = require('pouchdb');
var db = new PouchDB('insight');

db.createIndex({
    index: {
        fields: ['type']
    }
})

angular.module(require('insight.module')).
service(
    'GameLogs',
    function ($q, $log) {


        class GameLogs {
            constructor(game) {
                console.log('create GameLogs', game)
                this._db = new new PouchDB(game);
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

        this.get = function (id) {

            return $q.when(
                db.get(id).when(
                    (doc) => {
                        return new GameLogs(doc);
                    }
                )
            );

            var game = new GameLogs();
            return game;
        }
    }
);

module.exports = 'GameLogs';
