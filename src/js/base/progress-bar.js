var BaseView = require('base/base-view');

var BaseProgressBar = BaseView.extend({
    template: '',

    defaultOptions: {},

    initialize: function (options) {
        this.setElement(options.el);
        this.setOptions();
        this.render();
        this.setElements();
        this.setElementsView();
    },

    setOptions: function () {
        var data = this.$el.get(0).dataset;

        this.options = {};

        Object.keys(this.defaultOptions).forEach(function (key) {
            this.options[key] = data[key] || this.defaultOptions[key];
        }, this);
    },

    render: function () {
        this.$el.html(this.template);
    },

    setElements: function () {},

    setElementsView: function () {},

    start: function () {}
});

module.exports = BaseProgressBar;