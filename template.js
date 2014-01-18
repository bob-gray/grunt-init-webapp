"use strict";

exports.description = "Creates a new web application";
exports.notes = "";
exports.after = "You should now install project development dependencies with "+
    "_npm install_ and client dependencies with _bower install_. After that, "+
    "you may execute project tasks with _grunt_.";
exports.warnOn = "*";

exports.template = function(grunt, init, done) {
    var prompts = [
        init.prompt("name"),
        init.prompt("description"),
        init.prompt("version"),
        init.prompt("author_name"),
        init.prompt("author_email"),
        init.prompt("datasource", "CountyData_SQL")
    ];

    init.process({}, prompts, function(error, props) {
        var files = init.filesToCopy(props);

        props.devDependencies = {
            "grunt": "~0.4.1",
            "grunt-contrib-jshint": "~0.6.4",
            "grunt-karma": "~0.6.2",
            "grunt-contrib-requirejs": "~0.4.1",
            "karma-ie-launcher": "~0.1.1",
            "karma-safari-launcher": "~0.1.1",
            "karma-coverage": "~0.1.0",
            "grunt-contrib-watch": "~0.5.3"
        };

        init.copyAndProcess(files, props, {});

        init.writePackageJSON("package.json", props);
        
        done();
    });
};