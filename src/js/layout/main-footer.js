var BaseView = require('base/base-view');

/**
 * @constructor
 */
var MainFooter = BaseView.extend({
    /**
     * @override
     */
    template: 'layout/main-footer',
    url: 'data/about.json',

    /**
     * @override
     */
    initialize: function () {
        this.renderAfterFetch();
    }
});

module.exports = MainFooter;