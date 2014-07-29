'use strict';

/* see: https://github.com/gruntjs/grunt-contrib-copy */
module.exports = {
    libs: {
        files: [
            // bootstrap
            { src: 'bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'dist/lib/bootstrap', expand: true, flatten: true },
            { src: 'bower_components/bootstrap/dist/css/bootstrap.css.map', dest: 'dist/lib/bootstrap', expand: true, flatten: true },
            { src: 'bower_components/bootstrap/dist/fonts/*.*', dest: 'dist/lib/bootstrap/fonts', expand: true, flatten: true },
        ]
    },
    instrument: {
        files: [
            { src: 'src/styles/**/*', dest: 'build/instrument', expand: true },
            { src: 'src/templates/**/*', dest: 'build/instrument', expand: true }
        ]
    }
};
