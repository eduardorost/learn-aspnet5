(function () {
    'use strict';
    angular.module('sellseverything').run(runBlock);

    function runBlock(authFactory) {
        authFactory.initialize();
    }
})();