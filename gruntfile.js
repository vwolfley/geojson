module.exports = function(grunt){

    "use strict";

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // CSSLint. Tests CSS code quality
        // https://github.com/gruntjs/grunt-contrib-csslint
        csslint: {
            // define the files to lint
            files: ["css/main.css"],
                strict: {
                    options: {
                        "import": 0,
                        "empty-rules": 0,
                        "display-property-grouping": 0,
                        "shorthand": 0,
                        "font-sizes": 0,
                        "zero-units": 0,
                        "important": 0,
                        "duplicate-properties": 0,
                    }
            }
        },

        jshint: {
                options: {
                    // strict: true,
                    sub: true,
                    quotmark: "double",
                    trailing: true,
                    curly: true,
                    eqeqeq: true,
                    unused: true,
                    scripturl: true,
                    // This option defines globals exposed by the Dojo Toolkit.
                    dojo: true,
                    // This option defines globals exposed by the jQuery JavaScript library.
                    jquery: true,
                    // Set force to true to report JSHint errors but not fail the task.
                    force: true,
                    reporter: require("jshint-stylish-ex")
                },
                files: {
                    src : ['src/**/*.js', 'test/**/*.js']
                }
        },

        jsonlint: {
            sample: {
                src: ['wolfley.json', 'sherwood.json']
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['assets/js/base.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['buildcss']
            }
        }

    });

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['jshint']);
    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('test', ['jsonlint']);


};

//ref
// http://coding.smashingmagazine.com/2013/10/29/get-up-running-grunt/
// http://csslint.net/about.html
// http://www.jshint.com/docs/options/