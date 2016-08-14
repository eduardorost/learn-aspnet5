(function () {
    'use strict';
    angular.module('sellseverything').directive('listCustomersDirective', ListCustomersDirective);

    function ListCustomersDirective(DTOptionsBuilder) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/shared/customers/list-customers.html',
            controller: 'customersController',
            controllerAs: 'vm',
            scope: {
                customers: '='
            },
            link: linkFunc
        };

        return directive;

        function linkFunc(scope) {
            var self = this;

            self.dtOptions = DTOptionsBuilder.newOptions()
                            .withPaginationType('full_numbers')
                            .withDisplayLength(10);
        }
    }
})();
