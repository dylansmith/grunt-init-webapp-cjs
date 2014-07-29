'use strict';

/* see https://github.com/taichi/grunt-istanbul */
module.exports = {
    files: 'src/**/*.js',
    options: {
        lazy: true,
        basePath: 'build/instrument'
    }
};
