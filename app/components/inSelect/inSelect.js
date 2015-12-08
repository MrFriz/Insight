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
                    return (state._id.indexOf(query) === 0);
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
