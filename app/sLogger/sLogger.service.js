module.exports = require('main')
    .service('sLogger', function ($log) {
        "use strict";

        var sLogger = new require('./sLogger.lib')();

        $log.info('start logger service')


    });