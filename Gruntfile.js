'use strict';

module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		, livereloadPort : 4000

		, jshint: {
			lib: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'app/js/**/*.js'
					, '!app/js/libs/**/*.js'
				]
			}
			, test: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'app/test/jasmine/**/*.js'
					, '!app/test/jasmine/lib/**/*.js'
				]
			}
		}
		, clean: {
			options: {
				force: true
			},
			build: {
				expand: true,
				cwd: 'build/',
				src: '**',
				flatten: false
			}
		}
		, requirejs: {
			'james-data': {
				options: {
					baseUrl: ".",
					paths: {
						'james-data': 'james-data'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
					},
					out: "build/james-data.min.js",
					preserveLicenseComments: false,
				    include: ["james-data"],
				    exclude: ["text", "jquery"]
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			}
		}
		, copy: {
			bower: {
				files: [
					{
						src: 'build/james-data.min.js',
						dest: 'dist/james-data.min.js'
					},
					{
						src: 'build/james-data.min.js.map',
						dest: 'dist/james-data.min.js.map'
					}
				]
			},
			james: {
				files: [
					{
						src: 'build/james-data.min.js',
						dest: '../james/app/js/libs/custom/james-data.min.js'
					},
					{
						src: 'build/james-data.min.js.map',
						dest: '../james/app/js/libs/custom/james-data.min.js.map'
					}
				]
			}
		}
	});

	grunt.registerTask('build', ['clean', 'copy', 'requirejs']);
	grunt.registerTask('james', ['requirejs', 'copy:james']);
	grunt.registerTask('bower', ['requirejs', 'copy:bower']);
};
