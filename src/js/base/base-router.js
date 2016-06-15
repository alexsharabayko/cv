'use strict';

var mvc = require('lib/mvc');

var HomePage = require('pages/home-page');
var SkillsPage = require('pages/skills-page');
var PortfolioPage = require('pages/portfolio-page');
var ContactPage = require('pages/contact-page');

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
    currentPage: null,

    pages: {
        '': pages.home,
        default: pages.home,
        skills: pages.skill,
        portfolio: pages.portfolio,
        contact: pages.contact
    },

    routes: {
        '*route': 'routeHandler'
    },

    showPage: function (newPage) {
        var currentPage = this.currentPage;

        currentPage && currentPage.remove();

        newPage.append();

        this.currentPage = newPage;
    },

    routeHandler: function (path) {
        var pageKey = path || '';
        var newPage = this.pages[pageKey] || this.pages.default;

        this.showPage(newPage);
    }
});

// Create instance of router and start history functionality
var baseRouter = new BaseRouter();
mvc.history.start({pushState: true});

module.exports = baseRouter;