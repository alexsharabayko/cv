var BaseProgressBar = require('base/progress-bar');

/**
 * @constructor
 */
var CircleProgressBar = BaseProgressBar.extend({
    /**
     * @override
     */
    template: '<canvas></canvas><span class="text"></span>',

    /**
     * @override
     */
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

    /**
     * @override
     */
    setElements: function () {
        this.canvas = this.el.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.$text = this.$el.find('.text');
    },

    /**
     * @override
     */
    setElementsView: function () {
        //Set canvas size by element width
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

    /**
     * @override
     */
    start: function () {
        var interval = this.options.duration / this.options.percent;
        var currentPercent = 1;

        window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
    },

    /**
     * Interval for drawing circle by value
     *
     * @param interval {Integer}
     * @param currentPercent {Integer}
     */
    ticker: function (interval, currentPercent) {
        this.drawCircle(currentPercent++);

        if (currentPercent <= parseInt(this.options.percent, 10)) {
            window.setTimeout(this.ticker.bind(this, interval, currentPercent), interval);
        }
    },

    /**
     * Draw circle by current percent
     * @param percent {Integer}
     */
    drawCircle: function (percent) {
        var options = this.options;
        var canvas = this.canvas;
        var ctx = this.ctx;

        ctx.putImageData(this.imageData, 0, 0);

        //Draw background arc
        ctx.beginPath();
        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineCap = options.lineCap;
        ctx.lineWidth = options.lineWidth - 2;
        ctx.stroke();
        ctx.closePath();

        //Draw main arc (by percent)
        ctx.beginPath();
        ctx.arc(0, 0, (options.size - options.lineWidth) / 2, 0, Math.PI * 2 * percent / 100, false);
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineWidth = options.lineWidth;
        ctx.stroke();
        ctx.closePath();

        //Set percent to text
        this.$text.html(percent + '%');
    },

    /**
     * Refreshing
     */
    refreshOnResize: function () {
        this.setElementsView();
        this.drawCircle(this.options.percent);
    }
});

module.exports = CircleProgressBar;