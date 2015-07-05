/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="directives/pagecolumn.ts" />
'use strict';

import d = Application.Directives;

module Application.Controllers {
    
    export class MainCtrl {

        public isLeftbarVisible: boolean = true;
        public isRightbarVisible: boolean = true;

        public static $inject = ["$scope"];

        constructor(private $scope: ng.IScope) {

        }

        public swap = (pageColumn: d.PageColumns): void => {
            switch (pageColumn) {
                case d.PageColumns.LeftSideBar:
                    this.isLeftbarVisible = !this.isLeftbarVisible;
                    
                case d.PageColumns.RightSideBar:
                    this.isRightbarVisible = !this.isRightbarVisible;
            };
        }

    }

}