var mvc = require('lib/mvc');

var BaseView = mvc.View.extend({
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
    }
});

module.exports = BaseView;