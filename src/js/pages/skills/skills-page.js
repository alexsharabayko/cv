var PageView = require('base/page-view');
var dom = require('lib/dom');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

var SkillsPage = PageView.extend({
    render: function () {
        window.fetch('data/skills.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('skills/skills-page', data));

                this.circleProgressBar('.fn-common-tech-skills-progress');

                this.$('.fn-language-skills-progress').forEach(function (el) {
                    (new LinearProgressBar({ el: el })).start();
                });

                this.$('.fn-tools-skills-progress').forEach(function (el) {
                    (new PointsProgressBar({ el: el })).start();
                });
            }.bind(this));
    }
});

module.exports = SkillsPage;