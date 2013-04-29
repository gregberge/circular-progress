module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    uglify: {
      'default': {
        options: {
          preserveComments: 'some',
          sourceMap: 'circular-progress.min.map'
        },
        files: {
          'circular-progress.min.js': 'circular-progress.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};