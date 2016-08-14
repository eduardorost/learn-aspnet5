(function () {
    'use strict';
    angular.module('sellseverything').service('customersDataservice', CustomersDataservice);

    function CustomersDataservice($http) {
        var customersDataservice = {
            getAllCustomers: getAllCustomers,
            filterCustomers: filterCustomers
        };

        return customersDataservice;

        function getAllCustomers() {
            return $http.get('/api/customers');
        }

        function filterCustomers(filter) {
            var parameters = Object.keys(filter).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(filter[key]);
            }).join('&');

            return $http.get('/api/customers?' + parameters);
        }
    }
})();