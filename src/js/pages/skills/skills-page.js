var PageView = require('base/page-view');
var CircleProgressBar = require('widgets/progress-bar/circle');

var SkillsPage = PageView.extend({
    render: function () {
        this.$el.html(this.tmpl('skills/skills-page'));

        var c = new CircleProgressBar({
            color: 'green',
            size: 400,
            lineWidth: 10,
            fontSize: '5rem',
            fontColor: 'green'
        });

        document.body.innerHTML = '';
        document.body.appendChild(c.el);

        setTimeout(function () {
            c.start();
        }, 1000);
    }
});

module.exports = SkillsPage;