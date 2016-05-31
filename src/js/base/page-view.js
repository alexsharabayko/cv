var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageWrapper = dom('.page-wrapper');

var PageView = BaseView.extend({
    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.render();
    },

    append: function () {
        $pageWrapper.append(this.el);
    }
});

module.exports = PageView;