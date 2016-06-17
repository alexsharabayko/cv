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

        this._triggerMountedEvent();
    },

    remove: function () {
        BaseView.prototype.remove.apply(this, arguments);

        this.undelegateEvents();
    },

    _triggerMountedEvent: function () {
        if (this._rendered) {
            this.trigger('mounted');
        } else {
            this.listenToOnce(this, 'rendered', function () {
                this.trigger('mounted');
            }.bind(this));
        }
    },

    delegateEvents: function () {
        BaseView.prototype.delegateEvents.apply(this, arguments);

        dom(window).on('scroll' + '.scroll' + this.cid, function () {
            console.log(22);
        });
    },

    undelegateEvents: function () {
        BaseView.prototype.undelegateEvents.apply(this, arguments);

        dom(window).off('scroll' + '.scroll' + this.cid);
    }
});

module.exports = PageView;