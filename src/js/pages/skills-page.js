var PageView = require('base/page-view');
var dom = require('lib/dom');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

var SkillsPage = PageView.extend({
    template: 'pages/skills-page',
    url: 'data/skills.json',

    circleProgresses: [],

    initialize: function () {
        PageView.prototype.initialize.apply(this, arguments);

        this.listenToOnce(this, 'mounted', this.runProgresses.bind(this));
    },

    runProgresses: function () {
        this.$('.fn-tech-skills-progress').forEach(function (el) {
            var circleProgress = new CircleProgressBar({ el: el });

            circleProgress.start();

            this.circleProgresses.push(circleProgress);
        }, this);

        this.$('.fn-language-skills-progress').forEach(function (el) {
            (new LinearProgressBar({ el: el })).start();
        });

        this.$('.fn-tools-skills-progress').forEach(function (el) {
            (new PointsProgressBar({ el: el })).start();
        });
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