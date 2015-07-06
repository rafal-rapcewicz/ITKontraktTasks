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
                controller: function ($scope, $attrs) {
                    var _this = this;
                    var self = this;
                    var init = function () {
                        switch ($attrs[PAGE_COLUMN]) {
                            case PageColumns.LeftSideBar.toString():
                                _this.columnClass = MIDDLE_COL + 2;
                                break;
                            case PageColumns.MainPanel.toString():
                                _this.columnClass = MIDDLE_COL + 8;
                                break;
                            case PageColumns.RightSideBar.toString():
                                _this.columnClass = MIDDLE_COL + 2;
                                break;
                        }
                        $scope.$on(Directives.COLUMNS_CHANGE, function (e, colNo, colFlag) {
                            //changing class of swaping column
                            if (colNo == $attrs[PAGE_COLUMN]) {
                                self.columnClass = (self.columnClass == HIDDEN_COL) ? MIDDLE_COL + 2 : HIDDEN_COL;
                            }
                            ;
                            //adjusting width of main panel column
                            if ($attrs[PAGE_COLUMN] == PageColumns.MainPanel) {
                                self.columnClass = MIDDLE_COL + (PageColumns.LeftSideBar && colFlag ? 0 : 2) + 8 +
                                    (PageColumns.RightSideBar && colFlag ? 0 : 2);
                            }
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