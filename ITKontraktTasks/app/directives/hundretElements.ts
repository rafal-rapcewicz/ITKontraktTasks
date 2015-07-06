/// <reference path="../../scripts/typings/_all.d.ts" />
'use strict';

module Application.Directives {    

    export function hundretElements(): ng.IDirective {
        return {
            restrict: 'A',
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {

                var ul: HTMLUListElement = document.createElement("ul");
                for (var i = 0; i < 100; i++) {
                    var li: HTMLLIElement = document.createElement("li");
                    if ((i + 1) % 3 == 0) {
                        var a: HTMLAnchorElement = document.createElement("a");
                        a.text = "click me";
                        a.href = "javascript:void(0);";
                        li.appendChild(a);
                    } else {
                        li.textContent = "don't bother clicking on me";
                    }
                    ul.appendChild(li);
                }
                element.append(ul);
            }
        };
    };

}