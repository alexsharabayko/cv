var BaseView = require('base/base-view');
var mvc = require('lib/mvc');

/**
 * @constructor
 */
var MainHeader = BaseView.extend({
    /**
     * @override
     */
    template: 'layout/main-header',
    url: 'data/about.json',

    events: {
        'click .fn-nav-item': 'navigate'
    },

    initialize: function () {
        this.renderAfterFetch();
    },

    /**
     * Nivigate by backbone history
     * @param event {Event}
     */
    navigate: function (event) {
        event.preventDefault();

        mvc.history.navigate(event.currentTarget.getAttribute('href'), true);
    },

    /**
     * Set nav active class by path if need
     * @param path
     */
    updateNav: function (path) {
        if (this._rendered) {
            this.setNavActiveClass(path);
        } else {
            this.listenToOnce(this, 'rendered', this.setNavActiveClass.bind(this, path));
        }
    },

    /**
     * Set nav active class
     * @param path
     */
    setNavActiveClass: function (path) {
        var target = this.$('.fn-nav-item').filter(function (el) {
            return el.getAttribute('href').substr(1) === path;
        })[0];

        this.$('.fn-nav-item').removeClass('active');

        target.classList.add('active');
    }
});

module.exports = MainHeader;