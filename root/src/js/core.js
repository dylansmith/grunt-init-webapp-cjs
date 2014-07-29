'use strict';

/**
 * @module core
 * @requires lodash
 * @requires jquery
 * @requires modernizr
 * @requires bootstrap
 * @requires backbone
 * @requires config
 * @requires bundles/partials
 * @requires bundles/views
 */
module.exports = {
    '_'         : require('lodash'),
    '$'         : require('jquery'),
    'Modernizr' : require('modernizr'),
    'bootstrap' : require('bootstrap'),
    'Backbone'  : require('backbone'),
    'partials'  : require('../bundles/partials'),
    'views'     : require('../bundles/views'),
    'config'    : require('./config')
};
