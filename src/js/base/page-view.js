var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageContainer = dom('.page-container');

var PageView = BaseView.extend({
    events: {
        'aboveWindow .fn-section': 'handleSectionVisibleEvent'
    },

    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.renderAfterFetch();

        this.undelegateEvents();

        this.listenToOnce(this, 'mounted', function () {
            this.viewedSections = this.$('.fn-section').get();

            this.toggleEvents(true);

            this.handleViewedSectionsPosition();
        }.bind(this));
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
                this._mounted = true;

                this.trigger('mounted');
            }.bind(this));
        }
    },

    delegateEvents: function () {
        BaseView.prototype.delegateEvents.apply(this, arguments);

        this.toggleEvents(true);
    },

    undelegateEvents: function () {
        BaseView.prototype.undelegateEvents.apply(this, arguments);

        this.toggleEvents(false);
    },

    toggleEvents: function (flag) {
        if (this._mounted && this.viewedSections.length) {
            dom(window)[flag ? 'on' : 'off']('scroll' + '.scroll' + this.cid, this.handleViewedSectionsPosition.bind(this));
        }
    },

    handleViewedSectionsPosition: function () {
        var $sections = this.viewedSections;

        $sections.forEach(function (el) {
            var windowHeight = window.innerHeight;
            var elemPositionY = el.getBoundingClientRect().top;

            if (elemPositionY > 0 && elemPositionY < windowHeight) {
                dom(el).trigger('aboveWindow');

                $sections.splice($sections.indexOf(el), 1);
            }
        }, this);
    }
});

module.exports = PageView;