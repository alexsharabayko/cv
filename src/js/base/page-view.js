var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageContainer = dom('.page-container');

var PageView = BaseView.extend({
    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.renderAfterFetch();
    },

    append: function () {
        $pageContainer.append(this.el);
    }
});

module.exports = PageView;