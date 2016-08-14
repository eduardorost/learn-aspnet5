(function () {
    'use strict';
    angular.module('sellseverything').controller('customersController', CustomersController);

    function CustomersController($scope, authFactory) {

        var self = this;

        $scope.userLogged = authFactory.getUserLogged();

        $scope.logout = function () {
            authFactory.logout();
        }

    }

})();