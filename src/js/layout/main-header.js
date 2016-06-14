var BaseView = require('base/base-view');
var mvc = require('lib/mvc');

var MainHeader = BaseView.extend({
    events: {
        'click .fn-nav-item': 'navigate'
    },

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

    },

    navigate: function (event) {
        event.preventDefault();

        mvc.history.navigate(event.currentTarget.getAttribute('href'), true);

        this.setItemActiveClass(event.currentTarget);
    },

    setItemActiveClass: function (target) {
        this.$('.fn-nav-item').removeClass('active');

        target.classList.add('active');
    }
});

module.exports = MainHeader;