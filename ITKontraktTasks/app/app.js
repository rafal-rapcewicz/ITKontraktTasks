/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="directives/pagecolumn.ts" />
var Application;
(function (Application) {
    var Modules;
    (function (Modules) {
        'use strict';
        var directives = angular.module('directives', []).directive('pageColumn', Application.Directives.pageColumn);
        var app = angular.module('app', ['directives']);
    })(Modules = Application.Modules || (Application.Modules = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map