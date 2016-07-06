module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        clean: ["dist/"],
        uglify: {
            options: {
                screwIE8: true,
                unsafe: true
            },
            my_target: {
                files: {
                    'dist/dms.js': ['node_modules/geodesy/dms.js'],
                    'dist/index.js': ['node_modules/geodesy/latlon-spherical.js']
                }
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", [
        "clean",
        "uglify"
    ]);
};