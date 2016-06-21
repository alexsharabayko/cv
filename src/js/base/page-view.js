var BaseView = require('base/base-view');
var dom = require('lib/dom');

var $pageContainer = dom('.page-container');

/**
 * @constructor
 * @extends {BaseView}
 */
var PageView = BaseView.extend({
    /**
     * Mounted flag
     */
    _mounted: false,

    /**
     * Section above window event handlers
     */
    events: {
        'aboveWindow .fn-section': 'handleSectionVisibleEvent'
    },

    /**
     * @constructor
     */
    initialize: function () {
        BaseView.prototype.initialize.apply(this, arguments);

        this.renderAfterFetch();

        this.undelegateEvents();

        this.listenToOnce(this, 'mounted', this._setScrollOptions.bind(this));
    },

    /**
     * Section visible event listener
     */
    handleSectionVisibleEvent: function () {},

    /**
     * Appending page element to page container
     */
    append: function () {
        $pageContainer.append(this.el);

        this.delegateEvents();

        this._triggerMountedEventIfNeed();
    },

    /**
     * @override
     */
    remove: function () {
        BaseView.prototype.remove.apply(this, arguments);

        this.undelegateEvents();
    },

    /**
     * Install viewed sections and relative events
     * @private
     */
    _setScrollOptions: function () {
        this.viewedSections = this.$('.fn-section').get();

        this._toggleScrollEvents(true);

        this.handleViewedSectionsPosition();
    },

    /**
     * Trigger mounted event if view already was rendered, else - handle render event
     * @private
     */
    _triggerMountedEventIfNeed: function () {
        this._rendered ? this._triggerMountedEvent() : this.listenToOnce(this, 'rendered', this._triggerMountedEvent.bind(this));
    },

    /**
     * Install mounted flag to true, fire event
     * @private
     */
    _triggerMountedEvent: function () {
        this._mounted = true;

        this.trigger('mounted');
    },

    /**
     * @override
     */
    delegateEvents: function () {
        BaseView.prototype.delegateEvents.apply(this, arguments);

        this._toggleScrollEvents(true);
    },

    /**
     * @override
     */
    undelegateEvents: function () {
        BaseView.prototype.undelegateEvents.apply(this, arguments);

        this._toggleScrollEvents(false);
    },

    /**
     * Add window scroll event handlers if view was mounted and there are viewed sections
     * @param flag {Boolean} - off or on events handlers
     * @private
     */
    _toggleScrollEvents: function (flag) {
        if (this._mounted && this.viewedSections.length) {
            dom(window)[flag ? 'on' : 'off']('scroll' + '.scroll' + this.cid, this.handleViewedSectionsPosition.bind(this));
        }
    },

    /**
     * Check all viewed sections, if positions is matched trigger above window event and remove element from viewed sections
     */
    handleViewedSectionsPosition: function () {
        var $sections = this.viewedSections;
        var viewedElems = [];

        $sections.forEach(function (el) {
            var windowHeight = window.innerHeight;
            var elemPositionY = el.getBoundingClientRect().top;

            if (elemPositionY > 0 && elemPositionY < windowHeight) {
                dom(el).trigger('aboveWindow');

                viewedElems.push(el);
            }
        }, this);

        viewedElems.forEach(function (el) {
            $sections.splice($sections.indexOf(el), 1);
        }, this);
    }
});

module.exports = PageView;