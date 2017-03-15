module.exports = function(grunt){

//Grunt config
grunt.initConfig({
    //css
    cssmin:{
        target:{
            files:{
                'public/css/style.min.css': [
                    'assets/css/main.css',
                    'assets/css/typography.css'
                ]
            }
        }
    }

});

//Load plugins
grunt.loadNpmTasks('grunt-contrib-cssmin');

//Tasks
grunt.registerTask('css',['cssmin']);

};