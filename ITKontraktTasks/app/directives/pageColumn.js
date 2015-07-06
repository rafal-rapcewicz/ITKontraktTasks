/// <reference path="../../scripts/typings/_all.d.ts" />
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        'use strict';
        Directives.COLUMNS_CHANGE = "columnsChange";
        var MIDDLE_COL = "col-md-";
        var HIDDEN_COL = "hidden";
        var PAGE_COLUMN = "pageColumn";
        function pageColumn() {
            return {
                restrict: 'A',
                transclude: true,
                replace: true,
                //controller: function ($scope, $attrs) {                                               
                //},
                //controllerAs: "ctrl",
                template: '<div ng-class="columnClass"><div ng-transclude></div></div>',
                scope: {
                    columnClass: "="
                },
                link: function ($scope /*ng.IScope*/, element, attributes) {
                    var init = function () {
                        switch (attributes[PAGE_COLUMN]) {
                            case PageColumns.LeftSideBar.toString():
                                $scope.columnClass = MIDDLE_COL + 2;
                                break;
                            case PageColumns.MainPanel.toString():
                                $scope.columnClass = MIDDLE_COL + 8;
                                break;
                            case PageColumns.RightSideBar.toString():
                                $scope.columnClass = MIDDLE_COL + 2;
                                break;
                        }
                        $scope.$on(Directives.COLUMNS_CHANGE, function (e, colNo, colFlag) {
                            //changing class of swaping column
                            if (colNo == attributes[PAGE_COLUMN]) {
                                $scope.columnClass = ($scope.columnClass == HIDDEN_COL) ? MIDDLE_COL + 2 : HIDDEN_COL;
                            }
                            ;
                            //adjusting width of main panel column
                            if (attributes[PAGE_COLUMN] == PageColumns.MainPanel) {
                                $scope.columnClass = MIDDLE_COL + ((PageColumns.LeftSideBar & colFlag ? 0 : 2) + 8 +
                                    (PageColumns.RightSideBar & colFlag ? 0 : 2));
                            }
                        });
                    };
                    init();
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