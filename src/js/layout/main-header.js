var BaseView = require('base/base-view');

var MainHeader = BaseView.extend({
    initialize: function () {
        this.render();
    },

    render: function () {
        window.fetch('data/about.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl('layout/main-header', data));
            }.bind(this));

    }
});

module.exports = MainHeader;