var BaseProgressBar = require('base/progress-bar');

var CircleProgressBar = BaseProgressBar.extend({
    template: '<canvas></canvas><span class="text"></span>',

    defaultOptions: {
        percent: 33,
        color: 'black',
        lineWidth: 3,
        radius: 100,
        lineCap: 'round', // butt, round or square
        fontSize: '2rem',
        fontColor: 'black',
        duration: 1000
    },

    setElements: function () {
        this.canvas = this.el.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.$text = this.$el.find('.text');
    },

    setElementsView: function () {
        this.options.size = this.el.clientWidth;

        this.canvas.width = this.canvas.height = this.options.size;
        this.ctx.translate(this.options.size / 2, this.options.size / 2);
        this.ctx.rotate(-1 * Math.PI);

        this.imageData = this.ctx.getImageData(0, 0, this.options.size, this.options.size);

        this.$el.css({
            position: 'relative'
        });

        this.$text.css({
            'font-size': this.options.fontSize,
            color: this.options.fontColor,
            position: 'absolute',
            left: 0,
            top: 0,
            'margin-left': '50%',
            'margin-top': '50%',
            transform: 'translate(-50%, -50%)'
        });
    },

    start: function () {
        var interval = this.options.duration / this.options.percent;
        var currentPercent = 1;

        this.timeout = window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
    },

    ticker: function (interval, currentPercent) {
        this.drawCircle(currentPercent++);

        if (currentPercent <= parseInt(this.options.percent, 10)) {
            this.timeout = window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
        }
    },

    drawCircle: function (percent) {
        var options = this.options;
        var ctx = this.ctx;

        ctx.putImageData(this.imageData, 0, 0);

        ctx.beginPath();
        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineCap = options.lineCap;
        ctx.lineWidth = options.lineWidth - 2;
        ctx.stroke();

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