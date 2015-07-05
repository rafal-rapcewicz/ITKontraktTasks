/// <reference path="../../scripts/typings/_all.d.ts" />

module Application.Directives {
    'use strict';    

    pageColumn.$inject = ['$timeout'];

    export function pageColumn($timeout: ng.ITimeoutService): ng.IDirective {
        return {
            restrict: 'A',
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
                $scope.$watch(attributes.customFocus, val => {
                    if (angular.isDefined(val) && val) {
                        $timeout(() => { element[0].focus(); });
                    }
                }, true);

                element.bind('blur', () => {
                    if (angular.isDefined(attributes.customFocusLost)) {
                        $scope.$apply(attributes.customFocusLost);
                    }
                });
            }
        };
    };
    
    export enum PageColumns {
        LeftSideBar = 1,
        MainPanel = 2,
        RightSideBar = 4
    }

}