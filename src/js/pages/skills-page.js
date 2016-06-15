var PageView = require('base/page-view');
var CircleProgressBar = require('tools/progress-bar/circle');
var LinearProgressBar = require('tools/progress-bar/linear');
var PointsProgressBar = require('tools/progress-bar/points');

var SkillsPage = PageView.extend({
    events: {
        'rendered': 'gogo'
    },

    render: function () {
        window.fetch('data/skills.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('skills/skills-page', data));

                this.$el.trigger('rendered');
            }.bind(this));
    },

    gogo: function () {
        console.log(22);

        this.$('.fn-tech-skills-progress').forEach(function (el) {
            (new CircleProgressBar({ el: el })).start();
        });

        this.$('.fn-language-skills-progress').forEach(function (el) {
            (new LinearProgressBar({ el: el })).start();
        });

        this.$('.fn-tools-skills-progress').forEach(function (el) {
            (new PointsProgressBar({ el: el })).start();
        });
    }
});

module.exports = SkillsPage;