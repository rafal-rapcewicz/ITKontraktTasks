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
            //controller: function ($scope, $attrs) {                                               
            //},
            //controllerAs: "ctrl",
            template: '<div ng-class="columnClass"><div ng-transclude></div></div>',
            scope: {
                columnClass: "="
            },
            link: ($scope: any /*ng.IScope*/, element: JQuery, attributes: any) => {
                
                var init = (): void => {

                    switch (attributes[PAGE_COLUMN]) {
                        case PageColumns.LeftSideBar.toString(): $scope.columnClass = MIDDLE_COL + 2; break;
                        case PageColumns.MainPanel.toString(): $scope.columnClass = MIDDLE_COL + 8; break;
                        case PageColumns.RightSideBar.toString(): $scope.columnClass = MIDDLE_COL + 2; break;
                    }

                    $scope.$on(COLUMNS_CHANGE, (e: ng.IAngularEvent, colNo: number, colFlag: number) => {
                        //changing class of swaping column
                        if (colNo == attributes[PAGE_COLUMN]) {
                            $scope.columnClass = ($scope.columnClass == HIDDEN_COL) ? MIDDLE_COL + 2 : HIDDEN_COL;
                        };

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
    };
    
    export enum PageColumns {
        LeftSideBar = 1,
        MainPanel = 2,
        RightSideBar = 4
    }

}