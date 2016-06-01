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

                this.$('.circle-progress-bar').map(dom).forEach(function ($elem) {
                    var c = new CircleProgressBar($elem);

                    c.start();
                }, this)
            }.bind(this));

        //var c = new CircleProgressBar({
        //    color: 'green',
        //    size: 400,
        //    lineWidth: 10,
        //    fontSize: '5rem',
        //    fontColor: 'green'
        //});
    }
});

module.exports = SkillsPage;