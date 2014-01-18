module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			files: [
				"js/**/*.js",
				"tests/spec/**/*.js"
			],
			tasks: [
				"karma:watch:run"
			]
		},
		jshint: {
			options: {
				strict: true,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				latedef: "nofunc",
				newcap: true,
				noarg: true,
				noempty: true,
				nonew: true,
				plusplus: true,
				quotmark: true,
				undef: true,
				validthis: true,
				maxparams: 3,
				maxdepth: 2,
				maxcomplexity: 5,
				globals: {
					define: false,
					require: false,
					module: false
				}
			},
			src: [
				"js/**/*.js"
			],
			tests: {
				files: {
					src: [
						"tests/runner.js",
						"tests/karma/runner.js",
						"tests/spec/**/*.js"
					]
				},
				options: {
					globals: {
						require: false,
						define: false,
						jasmine: false,
						describe: false,
						beforeEach: false,
						afterEach: false,
						it: false,
						expect: false,
						__karma__: false
					}
				}
			}
		},
		karma: {
			options: {
				files: [{
					pattern: "js/**/*.js",
					included: false
				}, {
					pattern: "tests/spec/**/*-test.js",
					included: false
				}, "tests/karma/runner.js"],
				frameworks: [
					"jasmine",
					"requirejs"
				]
			},
			watch: {
				browsers: [
					"PhantomJS"
				],
				hostname: process.env.IP,
				port: process.env.PORT,
				runnerPort: 0,
				background: true
			},
			phantom: {
				browsers: [
					"PhantomJS"
				],
				hostname: process.env.IP,
				port: process.env.PORT,
				runnerPort: 0,
				singleRun: true
			},
			coverage: {
				browsers: [
					//"Chrome",
					//"Firefox",
					//"IE",
					//"Safari",
					"PhantomJS"
                ],
				preprocessors: {
					"js/**/*.js": [
						"coverage"
					]
				},
				reporters: [
					"progress",
					"coverage"
				],
				coverageReporter: {
					type: "html",
					dir: "tests/coverage/"
				},
				hostname: process.env.IP,
				port: process.env.PORT,
				runnerPort: 0,
				singleRun: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask("default", [
		"lint",
		"test"
	]);
	
	grunt.registerTask("lint", [
		"jshint"
	]);
	
	grunt.registerTask("test", [
		"karma:phantom"
	]);
	
	grunt.registerTask("coverage", [
		"karma:coverage"
	]);
	
	grunt.registerTask("startWatch", [
		"karma:watch:start",
		"watch"
	]);
};