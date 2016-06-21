var mvc = require('lib/mvc');

/**
 * @constructor
 * @extend Backbone View
 */
var BaseView = mvc.View.extend({
    /**
     * Parameters for 'renderAfterFetch' method
     * template {String} - template name
     * url {String} - data url
     */
    template: null,
    url: null,

    /**
     * Rendered flag
     */
    _rendered: false,

    /**
     * Return DoT template by template name or only template name
     * @param {String} templateName
     * @param {*} data
     * @returns {String}
     */
    tmpl: function (templateName, data) {
        var template = require('templates/' + templateName + '.dot');

        return template.call({
            tmpl: this.tmpl
        }, data);
    },

    /**
     * Get data from url and after it render template with received data
     *
     * @returns {Promise}
     */
    renderAfterFetch: function () {
        this._rendered = false;

        // Show loading (spinner maybe)
        this.showLoadingContent();

        /**
         * Fetch, transform data to object, render
         */
        return window.fetch(this.url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl(this.template, data));

                this.trigger('rendered');
                this._rendered = true;
            }.bind(this));
    },

    /**
     * Render loading content
     */
    showLoadingContent: function () {
        this.$el.html('<span class="loading">Loading</span>');
    }
});

module.exports = BaseView;