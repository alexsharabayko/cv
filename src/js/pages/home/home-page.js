var PageView = require('base/page-view');

var HomePage = PageView.extend({
    render: function () {
        window.fetch('data/about.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('about/about-page', data));
            }.bind(this));

    }
});

module.exports = HomePage;