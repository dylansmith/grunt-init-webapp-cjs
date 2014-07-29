module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build:css', [
        'less',
        'concat:css',
        'autoprefixer',
    ]);

    grunt.registerTask('build:js', [
        'bundle',
        'jshint:src',
        'browserify'
    ]);

    grunt.registerTask('build', [
        'clean',
        'build:css',
        'build:js',
        'uglify:js',
        'newer:imagemin',
        'copy:libs'
    ]);

};
