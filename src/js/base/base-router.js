'use strict';

var mvc = require('lib/mvc');
var layoutManager = require('layout/layout-manager');

var HomePage = require('pages/home-page');
var SkillsPage = require('pages/skills-page');
var PortfolioPage = require('pages/portfolio-page');
var ContactPage = require('pages/contact-page');

/**
 * Instances of pages
 * @type {Object}
 */
var pages = {
    home: new HomePage(),
    skill: new SkillsPage(),
    portfolio: new PortfolioPage(),
    contact: new ContactPage()
};

/**
 * Base router
 *
 * @constructor
 * @extends Router
 */
var BaseRouter = mvc.Router.extend({
    /**
     * Current page link
     */
    currentPage: null,

    /**
     * Pages map
     */
    pages: {
        '': pages.home,
        default: pages.home,
        skills: pages.skill,
        portfolio: pages.portfolio,
        contact: pages.contact
    },

    /**
     * Common routers map
     */
    routes: {
        '*route': 'routeHandler'
    },

    /**
     * Remove current page, refresh page and install link to new current page
     * @param newPage {PageView} - page to show
     */
    showPage: function (newPage) {
        var currentPage = this.currentPage;

        currentPage && currentPage.remove();

        newPage.append();

        this.currentPage = newPage;
    },

    /**
     * Get page and show it, refresh main nav elements
     * @param path {String} - current history pathname
     */
    routeHandler: function (path) {
        var pageKey = path || '';
        var newPage = this.pages[pageKey] || this.pages.default;

        this.showPage(newPage);

        layoutManager.updateMainNav(pageKey);
    }
});

// Create instance of router and start history functionality
var baseRouter = new BaseRouter();
mvc.history.start({pushState: true});

module.exports = baseRouter;