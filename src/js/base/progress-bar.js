var BaseView = require('base/base-view');

/**
 * @constructor
 * @extends {BaseView}
 */
var BaseProgressBar = BaseView.extend({
    /**
     * Innter template for progress view
     */
    template: '',

    /**
     * Default options for progress (color, width and so on)
     */
    defaultOptions: {},

    /**
     * @param options {Object}
     */
    initialize: function (options) {
        this.setElement(options.el);
        this.setOptions();
        this.render();
        this.setElements();
        this.setElementsView();
    },

    /**
     * Install options from default options and element dataset
     */
    setOptions: function () {
        var data = this.$el.get(0).dataset;

        this.options = {};

        Object.keys(this.defaultOptions).forEach(function (key) {
            this.options[key] = data[key] || this.defaultOptions[key];
        }, this);
    },

    /**
     * @override
     */
    render: function () {
        this.$el.html(this.template);
    },

    /**
     * Set help dom elements
     */
    setElements: function () {},

    /**
     * Set default elements view
     */
    setElementsView: function () {},

    /**
     * Start progress animation
     */
    start: function () {}
});

module.exports = BaseProgressBar;