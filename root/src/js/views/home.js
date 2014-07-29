'use strict';

/**
 * @module views/home
 * @requires core
 * @requires view/base
 * @requires templates/config.hbs
 */
var config = require('../config'),
    BaseView = require('./base');

/**
 * @class HomeView
 * @extends views.BaseView
 * @memberOf views
 */
var HomeView = BaseView.extend(
/** @lends views.HomeView.prototype */
{
    /**
     * The handlebars template
     * @type {Handlebars}
     */
    template: require('../../templates/home.hbs'),

    /**
     * Returns data representing the current state of the view
     * @return {Object}
     */
    getState: function() {
        return {
            config: JSON.stringify(config.getAll())
        };
    }
});

module.exports = HomeView;
