var PageView = require('base/page-view');

var HomePage = PageView.extend({
    render: function () {
        this.$el.html(this.tmpl('about/about-page'));
    }
});

module.exports = HomePage;