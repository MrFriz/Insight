// require assets
require('file?name=index.html!index.html');

// require core module and it's config
require('insight.module');
require('./insight.module.routes');

// require routes components
require('components/home');
require('components/insight');
require('components/insight.process');
require('components/inVideoFile');


// loading style
require('angular-material/angular-material.css');
require('style.css');
