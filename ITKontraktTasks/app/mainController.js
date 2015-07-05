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
                            _this.isLeftbarVisible = !_this.isLeftbarVisible;
                            _this.$scope.$broadcast("xxx", 1);
                        case d.PageColumns.RightSideBar:
                            _this.isRightbarVisible = !_this.isRightbarVisible;
                    }
                    ;
                };
            }
            MainCtrl.$inject = ["$scope"];
            return MainCtrl;
        })();
        Controllers.MainCtrl = MainCtrl;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=maincontroller.js.map