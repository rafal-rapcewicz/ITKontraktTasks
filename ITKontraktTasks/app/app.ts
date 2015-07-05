/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="maincontroller.ts" />
/// <reference path="directives/pagecolumn.ts" />
'use strict';

import c = Application.Controllers;

module Application.Modules {    

    var directives = angular.module('directives', []).directive('pageColumn',
        Application.Directives.pageColumn);

    var app = angular.module('app', ['directives'])
        .controller('mainCtrl', c.MainCtrl);
}