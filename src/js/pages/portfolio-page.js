var PageView = require('base/page-view');

var PortfolioPage = PageView.extend({
    url: 'data/portfolio.json',
    template: 'pages/portfolio-page'
});

module.exports = PortfolioPage;