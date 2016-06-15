var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageContainer = dom('.page-container');

var PageView = BaseView.extend({
    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.renderAfterFetch();

        this.listenToOnce(this, 'rendered', function () {
            this._rendered = true;
        }.bind(this));
    },

    append: function () {
        $pageContainer.append(this.el);

        if (this._rendered) {
            this.trigger('mounted');
        } else {
            this.listenToOnce(this, 'rendered', function () {
                this.trigger('mounted');
            }.bind(this));
        }
    }
});

module.exports = PageView;