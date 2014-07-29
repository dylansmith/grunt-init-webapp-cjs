'use strict';

/* see: https://www.npmjs.org/package/grunt-browserify */
module.exports = {
    debug: {
        src: 'src/js/app.js',
        dest: 'dist/js/app.debug.js',
        options: {
            bundleOptions: {
                debug: true
            }
        }
    },
    dist: {
        src: 'src/js/app.js',
        dest: 'dist/js/app.js'
    }
};