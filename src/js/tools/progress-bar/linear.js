var BaseView = require('base/base-view');

var LinearProgressBar = BaseView.extend({
    template: '<span class="language-skills-progress__bar fn-bar"></span>',

    defaultOptions: {
        percent: 33,
        color: 'black',
        duration: 1000,
        animationFunction: 'linear'
    },

    initialize: function (options) {
        this.setElement(options.el);
        this.setOptions();

        this.$el.html(this.template);

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

    setElements: function () {
        this.$bar = this.$('.fn-bar');
    },

    setElementsView: function () {
        var options = this.options;

        this.$el.css({
            'border-color': options.color
        });

        this.$bar.css({
            'background-color': options.color,
            width: 0,
            'transition': 'width ' + (options.duration / 1000) + 's ' + options.animationFunction,
            '-webkit-transition': 'width ' + (options.duration / 1000) + 's ' + options.animationFunction
        });
    },

    start: function () {
        window.setTimeout(function () {
            this.$bar.css('width', this.options.percent + '%');
        }.bind(this));
    }
});

module.exports = LinearProgressBar;