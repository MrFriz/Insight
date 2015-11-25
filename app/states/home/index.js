function HomeController($state, $rootScope) {

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
