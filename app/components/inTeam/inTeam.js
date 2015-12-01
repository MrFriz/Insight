function InTeamController($scope, $element, GameLogs) {
    'ngInject';

    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    self.newTeam = newTeam;

    $scope.ctrl = self;

    $element.bind('click', function()
    {
    	
    });

    function querySearch (query) {
        var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
        deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        //$log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        //$log.info('Item changed to ' + JSON.stringify(item));
    }

    function loadAll() {

        var allStates = 'Mr Friz 1, Mr Friz 2, Fresh Fever, Frisbeurs';

        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    function newTeam() {
        console.log('new team');
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
}

angular.module(require('insight.module')).
directive(
    'inTeam',
    function ($log) {
        return {
            scope: 
            {
            	name:'@'
            },
            transclude: true,
            template: require('./inTeam.html'),
            replace: true,
            controller: InTeamController,
            controllerAs: 'inTeamController'
        }
    });

module.exports = 'in-team-html';