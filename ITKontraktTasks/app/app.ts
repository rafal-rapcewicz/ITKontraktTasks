/// <reference path="../scripts/typings/_all.d.ts" />
/// <reference path="directives/pagecolumn.ts" />

module Application.Modules {
    'use strict';

    var directives = angular.module('directives', []).directive('pageColumn',
        Application.Directives.pageColumn);

    var app = angular.module('app', [ 'directives' ]); 
}