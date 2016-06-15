var dom = require('lib/dom');
var MainHeader = require('layout/main-header');

var mainHeader = new MainHeader();

dom('.fn-main-header').append(mainHeader.el);

module.exports = {
    updateMainNav: function (path) {
        mainHeader.updateNav(path);
    }
};
