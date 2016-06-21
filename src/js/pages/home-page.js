var PageView = require('base/page-view');
var dom = require('lib/dom');

var ANIMATIONS_TIMEOUT = 200;

/**
 * @constructor
 */
var HomePage = PageView.extend({
    /**
     * @override
     */
    template: 'pages/about-page',
    url: 'data/about.json',

    /**
     * Show all special items of section by timeout
     *
     * @override
     * @param event {Event}
     */
    handleSectionVisibleEvent: function (event) {
        var $items = dom(event.currentTarget).find('.fn-visible-item');
        var counter = 0;

        var interval = window.setInterval(function () {
            $items.eq(counter++).addClass('visible');

            if (counter === $items.length) {
                window.clearInterval(interval);
            }
        }, ANIMATIONS_TIMEOUT);
    }
});

module.exports = HomePage;