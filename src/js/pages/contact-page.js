var PageView = require('base/page-view');

var ContactPage = PageView.extend({
    template: 'pages/contact-page',
    url: 'data/about.json',

    googleMapsApiSrc: 'https://maps.googleapis.com/maps/api/js',

    googleMapOptions: {
        center: {
            lat: 53.90431287332806,
            lng: 27.561290189623833
        },
        zoom: 11
    },

    render: function () {
        //window.fetch('data/about.json')
        //    .then(function (response) {
        //        return response.json();
        //    })
        //    .then(function (data) {
        //        this.$el.html(this.tmpl('about/about-page', data));
        //    }.bind(this));
        this.$el.html(this.tmpl('pages/contact-page'));

        this.renderContactMap();
    },

    renderContactMap: function () {
        this.loadGoogleMapsApi().then(this.createGoogleMap.bind(this));
    },

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