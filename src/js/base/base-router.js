'use strict';

var dom = require('lib/dom');
var mvc = require('lib/mvc');

/**
 * Base router
 *
 * @constructor
 * @extends Router
 */
var BaseRouter = mvc.Router.extend({
    currentPage: null,

    pages: {
        '': require('pages/home/home-page'),
        default: require('pages/home/home-page'),
        skills: require('pages/skills/skills-page'),
        portfolio: require('pages/portfolio/portfolio-page'),
        contact: require('pages/contact/contact-page')
    },

    routes: {
        '*route': 'routeHandler'
    },

    showPage: function (PageClass) {
        var currentPage = this.currentPage;

        var page = new PageClass();

        currentPage && currentPage.remove();

        page.append();

        this.currentPage = page;
    },

    routeHandler: function (path) {
        var pageKey = path || '';
        var PageClass = this.pages[pageKey] || this.pages.default;

        this.showPage(PageClass);
    }
});

// Create instance of router and start history functionality
var baseRouter = new BaseRouter();
mvc.history.start({pushState: true});

module.exports = baseRouter;