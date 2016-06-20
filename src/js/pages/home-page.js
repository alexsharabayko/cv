var PageView = require('base/page-view');
var dom = require('lib/dom');

var HomePage = PageView.extend({
    template: 'pages/about-page',
    url: 'data/about.json',

    handleSectionVisibleEvent: function (event) {
        var $items = dom(event.currentTarget).find('.fn-visible-item');

        $items.map(dom).forEach(function ($item, i) {
            $item.css({
                'opacity': 1,
                'transform': 'translate(0)',
                '-webkit-transform': 'translate(0)',
                'transition-delay': (0.2 * i) + 's',
                '-webkit-transition-delay': (0.2 * i) + 's'

            });
        });
    }
});

module.exports = HomePage;