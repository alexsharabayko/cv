var PageView = require('base/page-view');

var INTERVAL_DURATION = 300;

/**
 * @constructor
 */
var PortfolioPage = PageView.extend({
    /**
     * @override
     */
    url: 'data/portfolio.json',
    template: 'pages/portfolio-page',

    /**
     * Show all special items of section by timeout
     *
     * @override
     * @param event {Event}
     */
    handleSectionVisibleEvent: function (event) {
        var $items = this.$('.fn-item');
        var index = 0;

        var interval = window.setInterval(function () {
            $items.eq(index++).addClass('visible');

            if (index === $items.length) {
                window.clearInterval(interval);
            }
        }.bind(this), INTERVAL_DURATION)
    }
});

module.exports = PortfolioPage;