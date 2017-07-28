System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var classTest;
    return {
        setters:[],
        execute: function() {
            classTest = (function () {
                function classTest(msg) {
                    this.msg = "test class classTest from file classtest.ts";
                    this.msg = msg;
                }
                classTest.prototype.getMsg = function () {
                    return this.msg;
                };
                classTest.prototype.setMsg = function (msg) {
                    this.msg = msg;
                };
                return classTest;
            }());
            exports_1("classTest", classTest);
        }
    }
});

//# sourceMappingURL=classtest.js.map
