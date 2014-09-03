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
					baseUrl: '.',
					paths: {
						'james-data': 'james-data'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: 'build/james-data.min.js',
					preserveLicenseComments: false,
				    include: ['james-data'],
				    exclude: ['text', 'jquery', 'underscore']
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			},
			parser: {
				options: {
					baseUrl: '.',
					paths: {
						'parser': 'src/parser'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: 'build/parser.min.js',
					preserveLicenseComments: false,
				    include: ['parser'],
				    exclude: ['text', 'jquery', 'underscore']
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			},
			food: {
				options: {
					baseUrl: '.',
					paths: {
						'food': 'src/food'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: 'build/food.min.js',
					preserveLicenseComments: false,
				    include: ['food'],
				    exclude: ['text', 'jquery', 'underscore']
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			},
			financial: {
				options: {
					baseUrl: '.',
					paths: {
						'food': 'src/financial'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: 'build/financial.min.js',
					preserveLicenseComments: false,
				    include: ['financial'],
				    exclude: ['text', 'jquery', 'underscore']
					, optimize: 'uglify2'
					, generateSourceMaps: true
				}
			},
			timesheet: {
				options: {
					baseUrl: '.',
					paths: {
						'food': 'src/timesheet'
						, 'text': 'bower_components/requirejs-text/text'
						, 'jquery': 'bower_components/jquery/dist/jquery'
						, 'underscore': 'bower_components/underscore/underscore'
					},
					out: 'build/timesheet.min.js',
					preserveLicenseComments: false,
				    include: ['timesheet'],
				    exclude: ['text', 'jquery', 'underscore']
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
					},
					{
						src: 'build/parser.min.js',
						dest: 'dist/parser.min.js'
					},
					{
						src: 'build/parser.min.js.map',
						dest: 'dist/parser.min.js.map'
					},
					{
						src: 'build/food.min.js',
						dest: 'dist/food.min.js'
					},
					{
						src: 'build/food.min.js.map',
						dest: 'dist/food.min.js.map'
					},
					{
						src: 'build/financial.min.js',
						dest: 'dist/financial.min.js'
					},
					{
						src: 'build/financial.min.js.map',
						dest: 'dist/financial.min.js.map'
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
					},
					{
						src: 'build/parser.min.js',
						dest: '../james/app/js/libs/custom/parser.min.js'
					},
					{
						src: 'build/parser.min.js.map',
						dest: '../james/app/js/libs/custom/parser.min.js.map'
					},
					{
						src: 'build/food.min.js',
						dest: '../james/app/js/libs/custom/food.min.js'
					},
					{
						src: 'build/food.min.js.map',
						dest: '../james/app/js/libs/custom/food.min.js.map'
					},
					{
						src: 'build/financial.min.js',
						dest: '../james/app/js/libs/custom/financial.min.js'
					},
					{
						src: 'build/financial.min.js.map',
						dest: '../james/app/js/libs/custom/financial.min.js.map'
					}
				]
			}
		}
	});

	grunt.registerTask('build', ['clean', 'copy', 'requirejs']);
	grunt.registerTask('james', ['requirejs', 'copy:james']);
	grunt.registerTask('bower', ['requirejs', 'copy:bower']);
};
