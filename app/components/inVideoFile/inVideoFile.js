angular.module(require('insight.module')).
directive(
    'inVideoFile',
    function ($log) {


        function InVideoController($scope, $element) {
            'ngInject';

            this._scope = $scope;
            this._element = $element;

            this.videoSelected = false;

            this._input = this._element.find('input');
            this._video = this._element.find('video');

            if (!this._input[0]) {
                throw new Error('Unable to find _input element from template');
            }

            if (!this._video[0]) {
                throw new Error('Unable to find _video element from template');
            }

            this._video.on('timeupdate', (event) => {
                this._timeUpdate(event);
            });

            this._input.on('change', () => {

                if (!this._input[0].files[0]) {

                    console.log(this._input);
                    return $log.warn('no file');
                }

                var file = this._input[0].files[0]
                try {

                    this._video[0].src = URL.createObjectURL(file);
                    this.videoSelected = true;
                    this._scope.$digest();
                }
                catch (err) {
                    $log.error('can\'t get file', err);
                }
            });
        }

        InVideoController.prototype._timeUpdate = function (event) {
            if (angular.isFunction(this._scope.timeUpdate)) {
                this._scope.timeUpdate(event.target.currentTime);
            }
        };

        InVideoController.prototype.play = function () {
            this._video[0].play();
        };

        InVideoController.prototype.pause = function () {
            this._video[0].pause();
        };

        return {
            scope: {
                timeUpdate: '='
            },
            template: require('./inVideoFile.html'),
            replace: false,
            controller: InVideoController,
            controllerAs: 'ctrl'
        }
    }
);

module.exports = 'in-_video-html';
