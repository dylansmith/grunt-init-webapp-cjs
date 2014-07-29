/*
 * grunt-init-browser
 * https://github.com/dylansmith/grunt-init-browser
 *
 * Copyright (c) 2014 Dylan Smith
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Scaffolds a project for browser-based development using CommonJS.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

exports.after = 'Now install project dependencies with _npm install && ' +
  'bower install_.\nAfter that, run the build with _grunt_.';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [

    // prompt for values
    init.prompt('name')

  ], function(err, props) {

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();

  });

};
