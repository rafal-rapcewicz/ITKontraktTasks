/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="maincontroller.ts" />
/// <reference path="directives/pagecolumn.ts" />
/// <reference path="directives/hundretelements.ts" />
'use strict';
var c = Application.Controllers;
var Application;
(function (Application) {
    var Modules;
    (function (Modules) {
        var directives = angular.module('directives', [])
            .directive('pageColumn', Application.Directives.pageColumn)
            .directive('hundretElements', Application.Directives.hundretElements);
        var app = angular.module('app', ['directives'])
            .controller('mainCtrl', c.MainCtrl);
    })(Modules = Application.Modules || (Application.Modules = {}));
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map