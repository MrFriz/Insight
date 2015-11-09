//loading libs
global.$ = require('jquery');
require('velocity-animate');
global.angular = require('angular');
global.moment = require('moment');
require('node-lumx');

require('../node_modules/node-lumx/dist/lumx.css');

// require assets
require('file?name=index.html!index.html');

// require modules
require('stats.core');