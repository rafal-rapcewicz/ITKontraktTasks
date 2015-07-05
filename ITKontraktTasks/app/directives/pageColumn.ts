/// <reference path="../../scripts/typings/_all.d.ts" />

module Application.Directives {
    'use strict';        
    export function pageColumn(): ng.IDirective {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,         
            controller: function ($scope, $attrs) {

                var init = (): void => {

                    switch ($attrs['pageColumn']) {
                        case PageColumns.LeftSideBar.toString(): this.columnClass = "col-md-2"; break;
                        case PageColumns.MainPanel.toString(): this.columnClass = ""; break;
                        case PageColumns.RightSideBar.toString(): this.columnClass = ""; break;
                    }

                    $scope.$on('xxx', (e: ng.IAngularEvent, n: any) => {
                        $scope.columnClass = "hidden";
                        //$scope.$apply();
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