define(["model"], function (Model) {
    "use strict";

    describe("Model", function () {
        var model;
    
        beforeEach(function () {
            model = new Model();
        });
        
        it("works!", function () {
            expect(model instanceof Model).toBe(true);
        });
    });
});