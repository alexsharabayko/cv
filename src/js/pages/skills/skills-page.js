var PageView = require('base/page-view');

var SkillsPage = PageView.extend({
    render: function () {
        this.$el.html(this.tmpl('skills/skills-page'));
    }
});

module.exports = SkillsPage;