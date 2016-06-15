var PageView = require('base/page-view');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

var SkillsPage = PageView.extend({
    template: 'pages/skills-page',
    url: 'data/skills.json',

    events: {
        'rendered': 'gogo'
    },

    gogo: function () {
        //this.$('.fn-tech-skills-progress').forEach(function (el) {
        //    (new CircleProgressBar({ el: el })).start();
        //});
        //
        //this.$('.fn-language-skills-progress').forEach(function (el) {
        //    (new LinearProgressBar({ el: el })).start();
        //});
        //
        //this.$('.fn-tools-skills-progress').forEach(function (el) {
        //    (new PointsProgressBar({ el: el })).start();
        //});
    }
});

module.exports = SkillsPage;