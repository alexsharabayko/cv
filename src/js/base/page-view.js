var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageContainer = dom('.page-container');

var PageView = BaseView.extend({
    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.renderAfterFetch();

        this.undelegateEvents();
    },

    append: function () {
        $pageContainer.append(this.el);

        this.delegateEvents();

        if (this._rendered) {
            this.trigger('mounted');
        } else {
            this.listenToOnce(this, 'rendered', function () {
                this.trigger('mounted');
            }.bind(this));
        }
    },

    remove: function () {
        BaseView.prototype.remove.apply(this, arguments);

        this.undelegateEvents();
    }
});

module.exports = PageView;