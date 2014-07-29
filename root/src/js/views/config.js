'use strict';

/**
 * @module views/config
 * @requires config
 * @requires view/base
 * @requires templates/config.hbs
 */
var config = require('../config'),
    BaseView = require('./base');

/**
 * @class ConfigView
 * @extends views.BaseView
 * @memberOf views
 * @requires core
 * @requires views/base
 */
var ConfigView = BaseView.extend(
/** @lends views.ConfigView.prototype */
{
    /**
     * The handlebars template
     * @type {Handlebars}
     */
    template: require('../../templates/config.hbs'),

    /**
     * Returns data representing the current state of the view
     * @return {Object}
     */
    getState: function() {
        return config;
    }
});

module.exports = ConfigView;
