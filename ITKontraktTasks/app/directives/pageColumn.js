/// <reference path="../../scripts/typings/_all.d.ts" />
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        'use strict';
        function pageColumn() {
            return {
                restrict: 'A',
                transclude: true,
                replace: true,
                scope: { columnClass: "@" },
                controller: function ($scope, $attrs) {
                    this.columnClass = "col-md-2";
                    var init = function () {
                        switch ($attrs['pageColumn']) {
                            case PageColumns.LeftSideBar.toString(): $scope.columnClass = "col-md-2";
                            case PageColumns.MainPanel.toString(): $scope.columnClass = "";
                            case PageColumns.RightSideBar.toString(): $scope.columnClass = "";
                        }
                        $scope.$on('xxx', function (e, n) {
                            $scope.columnClass = "hidden";
                        });
                    };
                    init();
                },
                controllerAs: "ctrl",
                template: '<div ng-class="ctrl.columnClass"><div ng-transclude></div></div>',
                link: function ($scope, element, attributes) {
                }
            };
        }
        Directives.pageColumn = pageColumn;
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