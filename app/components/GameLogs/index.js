var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

module.exports = require('./GameLogs');

