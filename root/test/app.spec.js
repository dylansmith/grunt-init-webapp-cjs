'use strict';

describe('App', function() {

    var app = require('../build/instrument/src/js/app'),
        views = require('../build/instrument/src/bundles/views'),
        $ = require('jquery'),
        _ = require('lodash');

    beforeEach(function() {
        app.config.set('js_namespace', 'test_app');
        app.init();
    });

    it('should auto-initialise', function() {
        app.initialised.should.be.true;
    });

    it('should have a #config property', function() {
        _.isObject(app.config).should.be.true;
    });

    describe('#init', function() {

        it('should be exposed via a global namespace if the "js_namespace" config option is set', function() {
            var ns = app.config.get('js_namespace');
            ns.should.equal('test_app');
            window[ns].should.equal(app);
        });

        it('should attempt to set the environment based on a meta element', function() {
            app.config.getenv().should.not.equal('prod');
            var meta = $('<meta>');
            meta.attr({
                name: 'application-env',
                content: 'prod'
            }).appendTo('head');
            app.init();
            app.config.getenv().should.equal('prod');
            app.config.setenv('dev');
            meta.remove();
        });

        it('should initially render the HomeView', function() {
            app.currentView.constructor.should.equal(views.home);
        });

    });

    describe('#render', function() {
        var spy;

        it('should render the currentView', function() {
            app.currentView.should.be.ok;
            spy = sinon.spy(app.currentView, 'render');
            app.render();
            spy.calledOnce.should.be.true;
        });

    });

    describe('#setTheme', function() {
        var testTheme = 'mono';

        beforeEach(function() {
            app.setTheme('');
        });

        it('should update the config', function() {
            app.config.get('theme').should.not.equal(testTheme);
            app.setTheme('mono');
            app.config.get('theme').should.equal(testTheme);
        });

        it('should update the body attribute', function() {
            app.setTheme(testTheme);
            $('body').attr('data-theme').should.equal(testTheme);
        });

    });

    describe('#setView', function() {

        beforeEach(function() {
            app.setView('home');
        });

        it('should set app.currentView to a valid view instance', function() {
            app.currentView.constructor.should.not.equal(views.config);
            app.setView('config');
            app.currentView.constructor.should.equal(views.config);
        });

        it('should set fallback to 404 if the viewId is invalid', function() {
            app.currentView.constructor.should.not.equal(views['404']);
            app.setView('NONEXISTANT');
            app.currentView.constructor.should.equal(views['404']);
        });

    });

});
