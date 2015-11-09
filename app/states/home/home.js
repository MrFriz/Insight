require('./style.css');

/*@ngInject*/
function HomeCtrl($log) {
    $log.debug('HomeControlelr loaded !');
}


console.log(require('html!./home.html'));

exports.name = 'home';
exports.config = {
    url: "/home",
    template: require('html!./home.html'),
    controller: HomeCtrl
}