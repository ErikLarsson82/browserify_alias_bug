module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.initConfig({
    browserify: {
      bundle: {
        src: ['app.js'],
        dest: 'bundle.js',
        options: {
          browserifyOptions: {
            standalone: 'foo'
          },
          alias: {
            'ReactDOM': './node_modules/react-dom/index.js' //This breaks export
          }
        }
      }
    }
  });
};
