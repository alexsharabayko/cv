var dom = require('lib/dom');
var MainHeader = require('layout/main-header');
var MainFooter = require('layout/main-footer');

var mainHeader = new MainHeader();
var mainFooter = new MainFooter();

dom('.fn-main-header').append(mainHeader.el);
dom('.fn-main-footer').append(mainFooter.el);

module.exports = {
    updateMainNav: function (path) {
        mainHeader.updateNav(path);
    }
};
