var PageView = require('base/page-view');
var dom = require('lib/dom');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

/**
 * @constructor
 */
var SkillsPage = PageView.extend({
    /**
     * @override
     */
    template: 'pages/skills-page',
    url: 'data/skills.json',

    /**
     * Circle progress cache (for listening resize)
     */
    circleProgresses: [],

    progressesMap: {
        circle: CircleProgressBar,
        linear: LinearProgressBar,
        points: PointsProgressBar
    },

    /**
     * Start progresses of section
     * Cache circle progresses
     *
     * @override
     * @param event {Event}
     */
    handleSectionVisibleEvent: function (event) {
        var progresses = dom(event.target).find('.fn-progress');

        progresses.forEach(function (el) {
            var progressKey = el.dataset.progress;
            var ProgressClass = this.progressesMap[progressKey];

            var progress = new ProgressClass({ el: el });
            progress.start();

            //Cache circle progresses for resize events
            if (progressKey === 'circle') {
                this.circleProgresses.push(progress);
            }
        }, this);
    },

    /**
     * Resize circle canvas on window resize
     * @override
     */
    delegateEvents: function () {
        PageView.prototype.delegateEvents.apply(this, arguments);

        dom(window).on('resize.resize-circle-progress', function () {
            this.circleProgresses.forEach(function (circleProgress) {
                circleProgress.refreshOnResize();
            });
        }.bind(this));
    },

    /**
     * @override
     */
    undelegateEvents: function () {
        PageView.prototype.undelegateEvents.apply(this, arguments);

        dom(window).off('resize.resize-circle-progress');
    }
});

module.exports = SkillsPage;