angular.module(require('insight.module')).
directive(
    'inVideoFile',
    function ($log) {
        return {
            template: require('./inVideoFile.html'),
            replace: true,
            controller: function ($scope, $element) {

                $scope.videoSelected = false;

                var input = $element.find('input')[0];
                var video = $element.find('video')[0];

                if (input) {

                    input.onchange = function () {

                        if (!input.files[0]) {
                            return console.log('no file');
                        }

                        var file = input.files[0]
                        try {
                            video.src = URL.createObjectURL(file);
                            $scope.videoSelected = true;
                            $scope.$digest();
                        }
                        catch (err) {
                            $log.error('can\'t get file', err);
                        }
                    };

                }
            }
        }
    }
);

module.exports = 'in-video-html';
