angular.module(require('insight.module')).
directive(
    'inVideoFile',
    function ($log) {


        function InVideoController($scope, $element) {
            'ngInject';

            $scope.videoSelected = false;

            this.input = $element.find('input')[0];
            this.video = $element.find('video')[0];

            if (!this.input) {
                throw new Error('Unable to find input element from template');
            }

            if (!this.video) {
                throw new Error('Unable to find video element from template');
            }

            this.input.onchange = () => {

                if (!this.input.files[0]) {
                    return $log.warn('no file');
                }

                var file = this.input.files[0]
                try {
                    this.video.src = URL.createObjectURL(file);
                    $scope.videoSelected = true;
                    $scope.$digest();
                }
                catch (err) {
                    $log.error('can\'t get file', err);
                }
            };
        }

        InVideoController.prototype.play = function() {
            this.video.play();
        };

        InVideoController.prototype.pause = function() {
            this.video.pause();
        };

        return {
            scope: {},
            template: require('./inVideoFile.html'),
            replace: false,
            controller: InVideoController,
            controllerAs: 'ctrl'
        }
    }
);

module.exports = 'in-video-html';
