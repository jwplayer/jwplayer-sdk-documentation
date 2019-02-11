module.exports = function (grunt) {

  'use strict';

  // configure grunt
  grunt.initConfig({
    'mkdocs-jwplayer': {
      build: {},
      serve: {
        options: {
          serve: true
        }
      },
      deploy: {
        options: {
          deploy: true
        }
      }
    }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-mkdocs-jwplayer');

  // build docs
  grunt.registerTask('default', [
    'mkdocs-jwplayer:build'
  ]);

  // build docs and serve localhost
  grunt.registerTask('serve', [
    'mkdocs-jwplayer:serve'
  ]);

  // build docs and deploy via jenkins
  grunt.registerTask('deploy', [
    'mkdocs-jwplayer:deploy'
  ]);

  // look for and compile custom markdown
  grunt.registerTask('compile-custom-markdown', function() {
    grunt.file.recurse('developer-guide', function callback(absPath, rootDir, subDir, filename) {
      if (filename.substr(filename.length - 4) == 'html') {
        var html = grunt.file.read(absPath);
        html = html.replace(/<\w+>\s?\^{3}([\s\S]*?)\^{3}\s?<\/\w+>/g, function(match, cg1, offset, str) {
          return '<div class="output">' + cg1.trim() + '</div>';
        });
        html = html.replace(/<.+>\s?\!{3}([a-z]+)?([\s\S]*?)\!{3}\s?<\/.+>/g, function(match, cg1, cg2, offset, str) {
          cg1 = cg1 || 'default';
          return '<div class="alert ' + cg1.trim() + '">' + cg2.trim() + '</div>';
        });
        grunt.file.write(absPath, html);
      }
    });
  });
};
