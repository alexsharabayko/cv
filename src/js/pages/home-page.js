var PageView = require('base/page-view');
var dom = require('lib/dom');

var HomePage = PageView.extend({
    template: 'pages/about-page',
    url: 'data/about.json',

    handleSectionVisibleEvent: function (event) {
        var $items = dom(event.currentTarget).find('.fn-visible-item');
        var counter = 0;

        var interval = window.setInterval(function () {
            $items.eq(counter++).addClass('visible');

            if (counter === $items.length) {
                window.clearInterval(interval);
            }
        }, 200);
    }
});

module.exports = HomePage;