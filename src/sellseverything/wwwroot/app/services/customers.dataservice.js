(function () {
    'use strict';
    angular.module('sellseverything').service('customersDataservice', CustomersDataservice);

    function CustomersDataservice($http) {
        var customersDataservice = {
            getAllCustomers: getAllCustomers
        };

        return customersDataservice;

        function getAllCustomers() {
            return $http.get('/api/customers');
        }
    }
})();