var PageView = require('base/page-view');
var dom = require('lib/dom');
var CircleProgressBar = require('tools/progress-bar/circle');

var SkillsPage = PageView.extend({
    render: function () {
        window.fetch('data/skills.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('skills/skills-page', data));

                this.circleProgressBar('.fn-common-tech-skills-progress');
            }.bind(this));
    }
});

module.exports = SkillsPage;