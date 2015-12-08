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

            selectedItemChange(item) {

                this._scope.item = item;
                $log.info('Item changed to ' + JSON.stringify(item));
            }

            createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    console.log('state', state)
                    return (state.indexOf(lowercaseQuery) === 0);
                };
            }

            querySearch(query) {

                console.log('querySearch', query);


                var results = query ? this._scope.dataset.filter(this.createFilterFor(query)) : this._scope.dataset;

                return results;

            }
        }


        return {
            scope: {
                placeholder: '@',
                dataset: '=',
                item: '=',
                createNew: '&'
            },
            template: require('./inSelect.html'),
            controller: InSelectController,
            controllerAs: 'ctrl'
        }

    });


module.exports = 'in-select';
