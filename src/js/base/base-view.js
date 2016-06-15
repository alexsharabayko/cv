var mvc = require('lib/mvc');

var BaseView = mvc.View.extend({
    template: null,
    url: null,

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

    renderAfterFetch: function () {
        this._rendered = false;

        return window.fetch(this.url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.$el.html(this.tmpl(this.template, data));

                this.trigger('rendered');
                this._rendered = true;
            }.bind(this));
    }
});

module.exports = BaseView;