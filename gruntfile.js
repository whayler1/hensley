module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      prod: {
        files: {
          'assets/css/hens.css': 'src/less/hens.less'
        }
      }
    },
    watch: {
      less: {
        files: [
          'src/less/hens.less'
        ],
        tasks: [
          'less'
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};
