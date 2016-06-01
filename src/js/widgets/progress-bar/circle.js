var BaseView = require('base/base-view');
var dom = require('lib/dom');

var CircleProgressBar = BaseView.extend({
    className: 'circle-progress-bar',

    _template: '<canvas></canvas><span class="text"></span>',

    options: {
        percent: 98,
        color: 'black',
        lineWidth: 3,
        size: 200,
        radius: 100,
        lineCap: 'round', // butt, round or square
        fontSize: '2rem',
        fontColor: 'black',
        duration: 1000
    },

    initialize: function (options) {
        this.setOptionsAndHTML(options);
        this.setElements();
        this.setElementsView();
    },

    setOptionsAndHTML: function (options) {
        dom.extend(this.options, options);

        this.$el.html(this._template);
    },

    setElements: function () {
        this.canvas = this.el.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.$text = this.$('.text');
    },

    setElementsView: function () {
        this.canvas.width = this.canvas.height = this.options.size;
        this.ctx.translate(this.options.size / 2, this.options.size / 2);
        this.ctx.rotate(-0.5 * Math.PI);

        this.imageData = this.ctx.getImageData(0, 0, this.options.size, this.options.size);

        this.$text.css({
            'font-size': this.options.fontSize,
            color: this.options.fontColor
        });
    },

    start: function () {
        var interval = this.options.duration / this.options.percent;

        this.currentPercent = 1;

        this.interval = window.setInterval(function () {
            this.drawCircle(this.currentPercent++);

            this.currentPercent === this.options.percent && window.clearInterval(this.interval);
        }.bind(this), interval);
    },

    drawCircle: function (percent) {
        var options = this.options;
        var ctx = this.ctx;

        ctx.putImageData(this.imageData, 0, 0);
        ctx.beginPath();
        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2 * percent / 100, false);
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineWidth = options.lineWidth;
        ctx.stroke();

        this.$text.html(percent + '%');
    }
});

module.exports = CircleProgressBar;