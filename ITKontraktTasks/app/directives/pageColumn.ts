/// <reference path="../../scripts/typings/_all.d.ts" />

module Application.Directives {
    'use strict';        
    export function pageColumn(): ng.IDirective {
        return {
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: { columnClass: "@" },
            controller: function ($scope, $attrs) {
                this.columnClass = "col-md-2";

                var init = (): void => {

                    switch ($attrs['pageColumn']) {
                        case PageColumns.LeftSideBar.toString(): $scope.columnClass = "col-md-2";
                        case PageColumns.MainPanel.toString(): $scope.columnClass = "";
                        case PageColumns.RightSideBar.toString(): $scope.columnClass = "";
                    }

                    $scope.$on('xxx', (e: ng.IAngularEvent, n: any) => {
                        $scope.columnClass = "hidden";                       
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