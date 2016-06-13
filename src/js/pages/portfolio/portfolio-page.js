var PageView = require('base/page-view');

var PortfolioPage = PageView.extend({
    render: function () {
        window.fetch('data/portfolio.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('portfolio/portfolio-page', data));
            }.bind(this));
    }
});

module.exports = PortfolioPage;