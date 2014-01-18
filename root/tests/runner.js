require.config({
	baseUrl: "../js",
	paths: {
        spec: "../tests/spec"
	},
    map: {
        "*": {
            "css": "../bower_components/require-css/css.min",
            "solv": "../bower_components/solv/src",
            "handlebars": "../bower_components/handlebars/handlebars.amd.min",
            "jquery": "../bower_components/jquery/jquery.min",
            "jquery.ui": "../bower_components/jqueryui/ui/jquery-ui",
            "text": "../bower_components/requirejs-text/text"
        }
    }
});

require(
	[
		"spec/model-test"
	],
	function () {
		"use strict";

		var jasmineEnv = jasmine.getEnv(),
			htmlReporter = new jasmine.HtmlReporter();

		jasmineEnv.updateInterval = 1000;
		jasmineEnv.addReporter(htmlReporter);
		jasmineEnv.specFilter = function(spec) {
			return htmlReporter.specFilter(spec);
		};
		jasmineEnv.execute();
	}
);