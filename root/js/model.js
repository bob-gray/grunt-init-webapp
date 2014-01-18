define(function (require) {
    "use strict";

    require("solv/abstract/base");
    require("solv/abstract/emitter");
    require("solv/object/merge");

    var meta = require("solv/meta"),
        createClass = require("solv/class");

    var Model = createClass(
        meta({
            "name": "Model",
            "extends": "solv/abstract/base",
            "mixins": "solv/abstract/emitter",
            "arguments": [{
                "name": "options",
                "type": "object",
                "default": {}
            }]
        }),
        init
    );

    function init (options) {
        Object.merge.deep(this, options);
    }

    return Model;
});