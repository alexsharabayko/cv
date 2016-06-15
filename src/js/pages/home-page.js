var PageView = require('base/page-view');

var HomePage = PageView.extend({
    template: 'pages/about-page',
    url: 'data/about.json'
});

module.exports = HomePage;