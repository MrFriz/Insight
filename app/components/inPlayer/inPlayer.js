function InPlayerController($scope, $element) {
    'ngInject';

    $element.bind('click', function()
    {
    	
    });
}

angular.module(require('insight.module')).
directive(
    'inPlayer',
    function ($log) {
        return {
            scope: 
            {
            	name:'@'
            },
            transclude: true,
            template: require('./inPlayer.html'),
            replace: true,
            controller: InPlayerController,
            controllerAs: 'inPlayerController'
        }
    }
);

module.exports = 'in-player-html';