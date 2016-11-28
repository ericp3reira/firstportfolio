module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // engine: 'im',
          sizes: [{
            name: 'sm',
            width: '320px',
            // suffix: '-1x',
            quality: 10
          },
          {
            name: 'md',
            width: '640px',
            // suffix: '-1x',
            quality: 10
          },
          {
            name: 'lg',
            width: '960px',
            // suffix: '-1x',
            quality: 15
          },
          {
            name: 'sm',
            width: '320px',
            suffix: '-2x',
            quality: 30
          },
          {
            name: 'md',
            width: '640px',
            suffix: '-2x',
            quality: 30
          },
          {
            name: 'lg',
            width: '960px',
            suffix: '-2x',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      },
    },
    clean: {
      dev: {
        src: ['img'],
      },
    },
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir')
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
