require('./style.css');

/*@ngInject*/
function HomeCtrl($log) {
    $log.debug('HomeCtrl laoded !');
}

exports.name = 'home';
exports.config = {
    url: "/home",
    template: require('html!./home.html'),
    controller: HomeCtrl
};