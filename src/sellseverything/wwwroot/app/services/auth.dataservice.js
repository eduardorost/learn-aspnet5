(function () {
    'use strict';
    angular.module('sellseverything').service('authDataservice', AuthDataservice);

    function AuthDataservice($http, $window) {
        var authDataservice = {
            loginUser: loginUser
        };

        return authDataservice;

        function loginUser(credentials) {
            return $http.post('/api/auth', credentials)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
