(function () {
    'use strict';
    angular.module('sellseverything').controller('LoginController', LoginController);

    function LoginController($scope, authFactory) {

        var self = this;

        $scope.login = login;

        function login() {
            authFactory.authenticate($scope.user);
        }
    }
})();