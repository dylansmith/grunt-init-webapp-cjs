'use strict';

/**
 * @namespace views
 * @module views/base
 * @requires Backbone
 * @requires config
 */
var Backbone = require('backbone'),
    config = require('../config');

/**
 * @class BaseView
 * @extends Backbone.View
 * @memberOf views
 */
var BaseView = Backbone.View.extend(
/** @lends views.BaseView.prototype */
{
    /**
     * The DOM element managed by the View
     * @type {DOMElement}
     */
    el: config.get('container'),

    /**
     * The handlebars template
     * @type {Handlebars}
     */
    template: null,

    /**
     * Returns data representing the current state of the view
     * @return {Object}
     */
    getState: function() {
        return {
            config: config
        };
    },

    /**
     * Renders the View template into the managed element
     * @return {BaseView} (for chainability)
     */
    render: function() {
        var content = this.renderTemplate(this.getState());
        this.$el.html(content);
        return this;
    },

    /**
     * Executes the View template with the provided context object
     * @param  {Object} data The template context
     * @return {String}      The template output
     */
    renderTemplate: function(data) {
        return (this.template) ? this.template(data) : '';
    }
});

module.exports = BaseView;
