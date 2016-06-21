var PageView = require('base/page-view');

/**
 * @constructor
 */
var ContactPage = PageView.extend({
    /**
     * @override
     */
    template: 'pages/contact-page',
    url: 'data/about.json',

    /**
     * Google maps script link
     */
    googleMapsApiSrc: 'https://maps.googleapis.com/maps/api/js',

    /**
     * Google maps options
     */
    googleMapOptions: {
        center: {
            lat: 53.90431287332806,
            lng: 27.561290189623833
        },
        zoom: 11
    },

    initialize: function () {
        PageView.prototype.initialize.apply(this, arguments);

        this.listenToOnce(this, 'mounted', this.renderContactMap.bind(this));
    },

    /**
     * Create google map after loading script
     */
    renderContactMap: function () {
        this.loadGoogleMapsApi().then(this.createGoogleMap.bind(this));
    },

    /**
     * Create script element which load google maps api
     * @returns {Promise}
     */
    loadGoogleMapsApi: function () {
        return new Promise(function (resolve) {
            var scriptElement = document.createElement('script');

            scriptElement.async = true;
            scriptElement.src = this.googleMapsApiSrc;

            scriptElement.addEventListener('load', function () {
                resolve();
            });

            document.head.appendChild(scriptElement);
        }.bind(this));
    },

    /**
     * Render google maps, insert it and create marker
     */
    createGoogleMap: function () {
        var mapDiv = this.$('.fn-map').get(0);
        var options = this.googleMapOptions;

        var map = new google.maps.Map(mapDiv, options);

        var marker = new google.maps.Marker({
            position: options.center,
            map: map
        });
    }
});

module.exports = ContactPage;