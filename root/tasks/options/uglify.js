'use strict';

/* see: https://github.com/gruntjs/grunt-contrib-uglify */
module.exports = {
    js: {
        options: {
            drop_console: true,
            preserveComments: false,
            banner: '//' + new Date().toString() +'\n'
        },
        files: {
            'dist/js/app.js': ['dist/js/app.js']
        }
    }
};
