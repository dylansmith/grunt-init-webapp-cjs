module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('test', [
        'jshint:test',
        'instrument',
        'copy:instrument',
        'karma:unit'
    ]);

    grunt.registerTask('test:all', [
        'jshint:test',
        'instrument',
        'copy:instrument',
        'karma:unit_all'
    ]);

};
