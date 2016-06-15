var BaseProgressBar = require('base/progress-bar');

var LinearProgressBar = BaseProgressBar.extend({
    template: '<span class="language-skills-progress__bar fn-bar"></span>',

    defaultOptions: {
        percent: 33,
        color: 'black',
        duration: 1000,
        animationFunction: 'linear'
    },

    setElements: function () {
        this.$bar = this.$('.fn-bar');
    },

    setElementsView: function () {
        var options = this.options;

        this.$el.css({
            'position': 'relative',
            'border': '0.2rem solid ' + options.color,
            'height': '1.5rem',
            'border-radius': '0.75rem'
        });

        this.$bar.css({
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: 0,
            'background-color': options.color,
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