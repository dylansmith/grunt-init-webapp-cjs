module.exports = function(karma) {
    karma.set({
        autoWatch: false,                  // Watch files and execute the tests whenever one of these files changes.
        autoWatchBatchDelay: 250,         // How long Karma should wait in ms after file changes to restart testing
        basePath: './',                   // The root path location that will be used to resolve all relative paths defined in files and exclude. If the basePath configuration is a relative path then it will be resolved to the __dirname of the configuration file.
        browserDisconnectTimeout: 2000,   // How long does Karma wait for a browser to reconnect (in ms).
        browserDisconnectTolerance: 0,    // The number of disconnections tolerated.
        browserNoActivityTimeout: 10000,  // How long does Karma wait for a message from a browser before disconnecting it (in ms).
        browsers: [                       // Possible: Chrome, ChromeCanary, PhantomJS, Firefox, Opera, Internet Explorer, Safari
            'PhantomJS'
        ],
        captureTimeout: 60000,            // Timeout for capturing a browser (in ms).
        client: {
            mocha: {
                ui: 'tdd'
            }
        },
        colors: true,                     // Enable or disable colors in the output (reporters and logs).
        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'build/reports/coverage/'},
                {type: 'text', dir: 'build/reports/coverage/'}
            ]
        },
        exclude: [                        // List of files/patterns to exclude from loaded files.
            'build',
            'dist',
            'tasks'
        ],
        files: [                          // List of files/patterns to load in the browser.
        ],
        frameworks: [                     // List of frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']
            'browserify',
            'mocha',
            'expect',
            'sinon-chai'
        ],
        hostname: 'localhost',            // Hostname to be used when capturing browsers.
        logLevel: karma.LOG_INFO,        // Level of logging.
        loggers: [                        // A list of log appenders to be used. See the documentation for log4js for more information.
            {type: 'console'}
        ],
        plugins: [                        // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined plugin - Object. By default, Karma loads all siblink modules, that match karma-*.
            'karma-*'
        ],
        port: 9876,                       // The port where the webserver will be listening.
        preprocessors: {                  // A map of preprocessors to use.
            '/**/*.browserify': ['browserify']
        },
        browserify: {                     // browserify options
            files: [
                'test/**/*.js'
            ],
            transform: [
                'hbsfy',
                'debowerify',
                'browserify-shim'
            ]
        },
        proxies: {},                      // A map of path-proxy pairs.
        proxyValidateSSL: true,           // Whether or not karma or any browsers should raise an error when an inavlid SSL certificate is found.
        reportSlowerThan: 0,              // Karma will report all the tests that are slower than given time limit (in ms). This is disabled by default (since the default value is 0).
        reporters: [                      // A list of reporters to use.
            'mocha',                      // Possible: dots, progress (via plugins: mocha, nyan)
            'coverage'
        ],
        singleRun: false,                 // Continuous Integration mode if true.
        urlRoot: '/'                      // The base url, where Karma runs.
    });
};
