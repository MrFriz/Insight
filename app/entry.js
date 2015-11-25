// require assets
require('file?name=index.html!index.html');

// require core module and it's config
require('insight.module');
require('./insight.module.routes');

// require routes components
require('states');
require('components/inVideoFile');


// loading style
require('angular-material/angular-material.css');
require('style.css');
