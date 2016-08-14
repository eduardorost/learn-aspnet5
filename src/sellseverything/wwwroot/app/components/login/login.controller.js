(function () {
    'use strict';
    angular.module('sellseverything').controller('loginController', LoginController);

    function LoginController($scope, authFactory) {

        var self = this;

        $scope.login = login;
        $scope.success = true;

        function login() {
            authFactory.authenticate($scope.user, function (success) {
                $scope.success = success;
            });
        }
    }
})();