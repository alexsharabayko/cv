var dom = require('lib/dom');
var MainHeader = require('layout/main-header');
var MainFooter = require('layout/main-footer');

/**
 * Layout manager constructor
 *
 * Add layout elements to html
 *
 * @constructor
 */
var LayoutManager = function () {
    var elems = this.elements;

    dom('.fn-main-header').append(elems.mainHeader.el);
    dom('.fn-main-footer').append(elems.mainFooter.el);
};

LayoutManager.prototype = {
    /**
     * Layout elements links
     */
    elements: {
        mainHeader: new MainHeader(),
        mainFooter: new MainFooter()
    },

    /**
     * Update main header nav by path
     * @param path {String} - history pathname
     */
    updateMainNav: function (path) {
        this.elements.mainHeader.updateNav(path);
    }
};

module.exports = new LayoutManager();
