'use strict';

/**
 * @module router
 * @requires backbone
 */
var Backbone = require('backbone');

/**
 * @exports router
 * @extends Backbone.Router
 */
var router = Backbone.Router.extend({
    routes: {
        ''          : 'home',
        'home'      : 'home',
        'view/:id'  : 'setView',
        'theme/:id' : 'setTheme'
    }
});

module.exports = router;
