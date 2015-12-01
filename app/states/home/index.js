function HomeController($state, $rootScope, GameLogs) {

    var db = GameLogs.get('maDb');

    console.log(db);
    db._db.info().then(function (info) {
        console.log(info);
    })

    // TODO: we need real ID here
    if (!$rootScope.currentID) {
        $rootScope.currentID = 1;
    }

    this.i = {
        $state,
        $rootScope
    };
}

HomeController.prototype.startRecord = function () {

    var id = this.i.$rootScope.currentID++;

    console.log(id);


    this.i.$state.go('record', {id: id});
};

angular.module(require('insight.module')).
config(function ($stateProvider) {

    $stateProvider.state(
        'home', {
            url: '/home',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'ctrl'
        }
    )
});

require('./home.css');
