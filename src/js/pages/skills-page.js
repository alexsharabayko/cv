var PageView = require('base/page-view');
var dom = require('lib/dom');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

var SkillsPage = PageView.extend({
    template: 'pages/skills-page',
    url: 'data/skills.json',

    circleProgresses: [],

    progressesMap: {
        circle: CircleProgressBar,
        linear: LinearProgressBar,
        points: PointsProgressBar
    },

    handleSectionVisibleEvent: function (event) {
        var progresses = dom(event.target).find('.fn-progress');

        progresses.forEach(function (el) {
            var progressKey = el.dataset.progress;
            var ProgressClass = this.progressesMap[progressKey];

            var progress = new ProgressClass({ el: el });
            progress.start();

            if (progressKey === 'circle') {
                this.circleProgresses.push(progress);
            }
        }, this);
    },

    delegateEvents: function () {
        PageView.prototype.delegateEvents.apply(this, arguments);

        dom(window).on('resize.resize-circle-progress', function () {
            this.circleProgresses.forEach(function (circleProgress) {
                circleProgress.refreshOnResize();
            });
        }.bind(this));
    },

    undelegateEvents: function () {
        PageView.prototype.undelegateEvents.apply(this, arguments);

        dom(window).off('resize.resize-circle-progress');
    }
});

module.exports = SkillsPage;