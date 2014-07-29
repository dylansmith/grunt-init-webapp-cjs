'use strict';

/**
 * @module views/404
 * @requires view/base
 * @requires templates/404.hbs
 */
var BaseView = require('./base');

/**
 * @class NotFoundView
 * @extends views.BaseView
 * @memberOf views
 */
var NotFoundView = BaseView.extend(
/** @lends views.NotFoundView.prototype */
{
    /**
     * The handlebars template
     * @type {Handlebars}
     */
    template: require('../../templates/404.hbs')
});

module.exports = NotFoundView;
