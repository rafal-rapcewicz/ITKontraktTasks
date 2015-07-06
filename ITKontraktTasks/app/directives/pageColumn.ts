/// <reference path="../../scripts/typings/_all.d.ts" />

module Application.Directives {
    'use strict';        

    export const COLUMNS_CHANGE: string = "columnsChange";
    const MIDDLE_COL: string = "col-md-";
    const HIDDEN_COL: string = "hidden";
    const PAGE_COLUMN: string = "pageColumn";

    export function pageColumn(): ng.IDirective {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,         
            controller: function ($scope, $attrs) {

                var self = this;
                var init = (): void => {

                    switch ($attrs[PAGE_COLUMN]) {
                        case PageColumns.LeftSideBar.toString(): this.columnClass = MIDDLE_COL + 2; break;
                        case PageColumns.MainPanel.toString(): this.columnClass = MIDDLE_COL + 8; break;
                        case PageColumns.RightSideBar.toString(): this.columnClass = MIDDLE_COL + 2; break;
                    }

                    $scope.$on(COLUMNS_CHANGE, (e: ng.IAngularEvent, colNo: number, colFlag: number) => {
                        //changing class of swaping column
                        if (colNo == $attrs[PAGE_COLUMN]) {
                            self.columnClass = (self.columnClass == HIDDEN_COL) ? MIDDLE_COL + 2 : HIDDEN_COL;
                        };

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
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {                
            }
        };
    };
    
    export enum PageColumns {
        LeftSideBar = 1,
        MainPanel = 2,
        RightSideBar = 4
    }

}