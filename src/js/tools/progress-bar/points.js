var BaseProgressBar = require('base/progress-bar');

var LinearProgressBar = BaseProgressBar.extend({
    template: '<li class="tools-skills-progress__item fn-item"></li>',

    totalLength: 10,

    defaultOptions: {
        percent: 33,
        color: 'black',
        delay: 200,
        duration: 400,
        animationFunction: 'linear'
    },

    render: function () {
        var html = '';

        for (var i = 0; i < this.totalLength; i++) {
            html += this.template;
        }

        this.$el.html(html);
    },

    setElements: function () {
        this.$items = this.$('.fn-item');
    },

    setElementsView: function () {
        var options = this.options;

        this.$items.css({
            'transition': 'background ' + (options.duration / 1000) + 's ' + options.animationFunction,
            '-webkit-transition': 'background ' + (options.duration / 1000) + 's ' + options.animationFunction
        });
    },

    start: function () {
        var options = this.options;
        var length = Math.round(options.percent / 10);
        var flag = 0;

        var interval = setInterval(function () {
            this.$items.eq(flag++).css('background-color', options.color);

            if (flag === length) {
                clearInterval(interval);
            }
        }.bind(this), options.delay);
    }
});

module.exports = LinearProgressBar;