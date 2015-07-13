/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />

declare var browser, element, by: any;

describe("Hundred elements:", function () {
    describe("on loaded:", function () {
        it("should be 100 of them", function () {
            //browser.get("http://localhost:3000/");
            browser.get("../../index.html");

            var el = element(by.css('[ng-change="vm.swap(1)"]'));

            var el2 = el.findElement(by.xpath('..'));

            var checkbox1Text;
            el2.getText().then(function (text) {
                checkbox1Text = text;
            });

            expect(el2.getText()).toEqual('Show left sidebar');
  
        });
    });
}); 