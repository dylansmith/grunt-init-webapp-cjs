'use strict';

describe('BaseView', function() {

    var core = require('../../build/instrument/src/js/core'),
        $ = core.$,
        Backbone = core.Backbone,
        BaseView = core.views.base,
        Handlebars = require('handlebars'),
        view,
        tmpl,
        container;

    beforeEach(function() {
        // create an empty render container
        container = (!container) ?
            $('<div/>').attr('id', 'testContainer').appendTo('body') :
            container.empty();

        // create the view instance
        view = new BaseView({el: '#testContainer'});
        tmpl = Handlebars.compile('BaseViewTest');
        view.template = tmpl;
    });

    it('should extend Backbone.View', function() {
        view.should.be.an.instanceOf(Backbone.View);
    });

    describe('#render', function() {

        it('should return the view instance for sugar', function() {
            view.render().should.equal(view);
        });

        it('should populate the container with the template output', function() {
            container.html().should.equal('');
            view.render();
            container.html().should.equal(view.template());
        });

    });

    describe('#renderTemplate', function() {

        it('should return an empty string if no valid template is defined', function() {
            view.template = null;
            view.renderTemplate().should.equal('');
        });

        it('should return the rendered template output if a valid template is defined', function() {
            view.renderTemplate().should.equal(tmpl());
        });

    });

});
