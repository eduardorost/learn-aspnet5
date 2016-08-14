(function () {
    'use strict';
    angular.module('sellseverything').controller('customersController', CustomersController);

    function CustomersController($scope, NgTableParams, customersDataservice) {

        var self = this;

        customersDataservice.getAllCustomers().then(function (response) {
            $scope.tableParams = new NgTableParams({}, { dataset: response.data });
        });
    }
})();