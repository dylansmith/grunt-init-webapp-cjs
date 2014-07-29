'use strict';

/**
 * @module app
 * @requires lodash
 * @requires jquery
 * @requires core
 * @requires router
 */
var _ = require('lodash'),
    $ = require('jquery'),
    core = require('./core'),
    Router = require('./router');

/**
 * @exports app
 */
var App = {

    /**
     * Has the application been initialised already?
     * @type {Boolean}
     */
    initialised: false,

    /**
     * The appliation config
     * @type {Config}
     */
    config: core.config,

    /**
     * The active View instance
     * @type {views.BaseView}
     */
    currentView: null,

    /**
     * The current Router instance
     * @type {Backbone.Router}
     */
    router: new Router(),

    /**
     * Initialises the application
     */
    init: function() {
        // set the environment
        var env = $('meta[name="application-env"]').attr('content');
        if (env) {
            this.config.setenv(env);
        }

        // expose via the configured public namespace
        var ns = this.config.get('js_namespace');
        if (ns) {
            window[ns] = this;
        }

        if (this.initialised === false) {
            // listen for config changes
            this.config.on('config:update', this.configObserver, this);

            // respond to routes
            this.router.on('route:home', _.bind(this.setView, this, 'home'));
            this.router.on('route:setView', this.setView, this);
            this.router.on('route:setTheme', this.setTheme, this);
        }

        // set the default view
        this.setView('home');

        // commence routing
        if (!core.Backbone.History.started) {
            core.Backbone.history.start();
        }

        this.initialised = true;
    },

    /**
     * Event handler that responds to configuration changes
     * @private
     * @param  {Backbone.Events} evt
     */
    configObserver: function(evt) {
        var renderableKeys = ['theme'];
        // writes renderable config keys to the DOM as body attributes
        if (renderableKeys.indexOf(evt.key) >= 0) {
            if (!evt.newval) {
                $('body').removeAttr('data-' + evt.key);
            }
            else {
                $('body').attr('data-' + evt.key, evt.newval);
            }
        }
    },

    /**
     * Renders the active View
     */
    render: function() {
        this.currentView.render();
    },

    /**
     * Sets the active View
     * @param {String}   viewId   Path to the View module
     * @param {Function} callback Success callback
     * @param {Function} errback  Error callback
     */
    setView: function(viewId, callback, errback) {
        if (viewId in core.views) {
            this.currentView = new core.views[viewId]();
            this.currentView.render();
            if (callback) callback(this.currentView);
        }
        else if (viewId !== '404') {
            this.setView('404');
            if (errback) errback();
        }
    },

    /**
     * Sets the current theme
     * @param {String} themeId The unique theme id
     */
    setTheme: function(themeId) {
        this.config.set('theme', themeId);
        this.render();
    }

};

// now initialise & return
App.init();
module.exports = App;
