(function () {
    'use strict';
    angular.module('sellseverything').service('customersDataservice', CustomersDataservice);

    function CustomersDataservice($http) {
        var customersDataservice = {
            filterCustomers: filterCustomers
        };

        return customersDataservice;

        function filterCustomers(filter) {
            var parameters = Object.keys(filter).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(filter[key]);
            }).join('&');

            return $http.get('/api/customers?' + parameters);
        }
    }
})();