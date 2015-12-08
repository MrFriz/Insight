function dataStoreFactory($q, $log) {

    $log.debug('loading PouchDB...');
    var PouchDB = require('pouchdb');

    $log.debug('loading PouchDB-find...');
    PouchDB.plugin(require('pouchdb-find'));

    $log.debug('initializing insight db');
    var db = new PouchDB('insightDataStore');

    function createIndex(fields) {

        $log.debug('creating indexes...', fields);
        db.createIndex({
            index: {
                fields: fields
            }
        });
    }

    createIndex(['type']);
    //createIndex('type', 'player');

    class DataStore {
        constructor(db) {
            this._db = db;
        }

        _get(id) {
            return $q.when(this._db.get(id));
        }

        _find(selector) {
            return $q.when(
                this._db.find({
                    selector: selector
                }));

        }

        _getByType(id, type) {

            if (!id) {
                return this._find({type: type}).then((res) => {
                    return res.docs;
                });
            }

            return this._get(id).then(
                (doc)=> {
                    if (doc.type != type) {
                        throw new Error('Type is not "' + type + '"')
                    }

                    return doc;
                }
            );
        }

        _findChildByType(id, type, childType) {

            var query = {};
            query.type = childType;
            query[type] = id;

            return this._find(query);
        }

        _getStuff(type, id, childType) {

            if (!childType) {
                return this._getByType(id, type);
            }

            return this._findChildByType(id, type, childType);
        }

        teams(id, childType) {
            return this._getStuff('team', id, childType);
        }

        games(id, childType) {
            return this._getStuff('game', id, childType);
        }

        events(id, childType) {
            return this._getStuff('event', id, childType);
        }

        players(id, childType) {
            return this._getStuff('player', id, childType);
        }

        _put(doc) {

            if (!doc._id) {
                $log.debug('post', doc);
                return $q.when(this._db.post(doc));
            }

            $log.debug('put', doc);
            return $q.when(this._db.put(doc));
        }

        createGame(game) {
            var _game = angular.extend({}, game, {
                type: 'game',
                create: new Date()
            });

            return this._put(_game)
                .then((res) => {
                    return this.games(res.id);
                })
        }

        remove(doc) {
            $log.debug('remove', doc);
            return $q.when(this._db.remove(doc));
        }


    }


    return new DataStore(db);
}

angular.module(require('insight.module')).
factory('DataStore', dataStoreFactory);

module.exports = 'DataStore';
