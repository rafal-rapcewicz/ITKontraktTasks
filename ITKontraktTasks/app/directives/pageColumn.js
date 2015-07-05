/// <reference path="../../scripts/typings/_all.d.ts" />
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        'use strict';
        customFocus.$inject = ['$timeout'];
        function customFocus($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, element, attributes) {
                    $scope.$watch(attributes.customFocus, function (val) {
                        if (angular.isDefined(val) && val) {
                            $timeout(function () { element[0].focus(); });
                        }
                    }, true);
                    element.bind('blur', function () {
                        if (angular.isDefined(attributes.customFocusLost)) {
                            $scope.$apply(attributes.customFocusLost);
                        }
                    });
                }
            };
        }
        Directives.customFocus = customFocus;
        ;
        (function (PageColumns) {
            PageColumns[PageColumns["LeftSideBar"] = 1] = "LeftSideBar";
            PageColumns[PageColumns["MainPanel"] = 2] = "MainPanel";
            PageColumns[PageColumns["RightSideBar"] = 4] = "RightSideBar";
        })(Directives.PageColumns || (Directives.PageColumns = {}));
        var PageColumns = Directives.PageColumns;
    })(Directives = Application.Directives || (Application.Directives = {}));
})(Application || (Application = {}));
//# sourceMappingURL=pagecolumn.js.map