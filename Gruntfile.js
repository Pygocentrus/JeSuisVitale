module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'bower_components/underscore/underscore.js',
                    'bower_components/backbone/backbone.js',
                    'app/scripts/lib/q.js',
                    'app/scripts/custom/*.js',
                    'app/scripts/main.js'
                ],
                dest: 'app/scripts/production.js',
            }
        },

        uglify: {
            build: {
                src: 'app/scripts/production.js',
                dest: 'app/scripts/production.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'app/styles/sass',
                    cssDir: 'app/styles/stylesheets',
                    outputStyle: 'compressed',
                    config: 'app/config.rb'
                }
            }
        },

        watch: {
            scripts: {
                files: ['app/scripts/custom/*.js', 'app/scripts/main.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['app/styles/sass/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'watch']);

};
