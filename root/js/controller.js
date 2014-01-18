require.config({
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

require(["model", "view", "solv/class/singleton"], function (Model, View) {
    "use strict";
    
    var model = Model.singleton(),
        view = View.singleton();
});