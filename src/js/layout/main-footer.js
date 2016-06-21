var BaseView = require('base/base-view');

var MainFooter = BaseView.extend({
    template: 'layout/main-footer',
    url: 'data/about.json',

    initialize: function () {
        this.renderAfterFetch();
    }
});

module.exports = MainFooter;