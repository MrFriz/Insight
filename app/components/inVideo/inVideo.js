function InVideoCtrl($scope) {
    "ngInject"


}

angular.module(require('insight.module')).
directive(
    'inVideo',
    {
        scope: {
            video: '='
        }
    }
);
