/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="directives/pagecolumn.ts" />
'use strict';
var d = Application.Directives;
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var MainCtrl = (function () {
            function MainCtrl($scope) {
                var _this = this;
                this.$scope = $scope;
                this.isLeftbarVisible = true;
                this.isRightbarVisible = true;
                this.swap = function (pageColumn) {
                    switch (pageColumn) {
                        case d.PageColumns.LeftSideBar:
                            //this.isLeftbarVisible = !this.isLeftbarVisible;
                            _this.$scope.$broadcast(d.COLUMNS_CHANGE, d.PageColumns.LeftSideBar, _this.getPageColumnsFlag());
                            break;
                        case d.PageColumns.RightSideBar:
                            //this.isRightbarVisible = !this.isRightbarVisible;
                            _this.$scope.$broadcast(d.COLUMNS_CHANGE, d.PageColumns.RightSideBar, _this.getPageColumnsFlag());
                    }
                    ;
                };
                this.getPageColumnsFlag = function () {
                    return (_this.isLeftbarVisible ? d.PageColumns.LeftSideBar : 0) +
                        d.PageColumns.MainPanel +
                        (_this.isRightbarVisible ? d.PageColumns.RightSideBar : 0);
                };
            }
            MainCtrl.$inject = ["$scope"];
            return MainCtrl;
        })();
        Controllers.MainCtrl = MainCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=maincontroller.js.map