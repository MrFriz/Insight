angular.module(require('insight.module')).
directive(
    'inSelect', function (DataStore, $log) {


        class InSelectController {
            constructor($scope) {
                this._scope = $scope;
                $scope.dataset = $scope.dataset || [];
            }

            searchTextChange(text) {
                $log.info('Text changed to ' + text);
            }

            createFilterFor(query) {
                return function filterFn(state) {
                    console.log('FilterFor', query, state, state.indexOf(query) === 0);
                    return (state.indexOf(query) === 0);
                };
            }

            querySearch(query) {
                return query ? this._scope.dataset.filter(this.createFilterFor(query)) : this._scope.dataset;

            }

        }


        return {
            scope: {
                placeholder: '@',
                dataset: '=',
                item: '=',
                createNew: '&',
                itemChanged: '&'
            },
            template: require('./inSelect.html'),
            controller: InSelectController,
            controllerAs: 'ctrl'
        }

    });


module.exports = 'in-select';
