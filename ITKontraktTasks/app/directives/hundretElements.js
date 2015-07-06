/// <reference path="../../scripts/typings/_all.d.ts" />
'use strict';
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        function hundretElements() {
            return {
                restrict: 'A',
                link: function ($scope, element, attributes) {
                    var ul = document.createElement("ul");
                    for (var i = 0; i < 100; i++) {
                        var li = document.createElement("li");
                        if ((i + 1) % 3 == 0) {
                            var a = document.createElement("a");
                            a.text = "click me";
                            a.href = "javascript:void(0);";
                            li.appendChild(a);
                        }
                        else {
                            li.textContent = "don't bother clicking on me";
                        }
                        ul.appendChild(li);
                    }
                    element.append(ul);
                }
            };
        }
        Directives.hundretElements = hundretElements;
        ;
    })(Directives = Application.Directives || (Application.Directives = {}));
})(Application || (Application = {}));
//# sourceMappingURL=hundretelements.js.map