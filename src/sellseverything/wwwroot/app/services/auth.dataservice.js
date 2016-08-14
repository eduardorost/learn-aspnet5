(function () {
    'use strict';
    angular.module('sellseverything').service('authDataservice', AuthDataservice);

    function AuthDataservice($http, $window) {
        var authDataservice = {
            loginUser: loginUser,
            //isTokenValid: isTokenValid,
            logout: logout
        };

        return authDataservice;

        function loginUser(credentials) {
            return $http.post('/api/auth', credentials)
                .then(function (response) {
                    return response.data;
                });
        }

        //function isTokenValid() {
        //    return $http.get('api/auth', { headers: { 'Cache-Control': 'no-cache' } })
        //        .then(function (response) {
        //            if (checkHttpStatus(response)) {
        //                return $window.localStorage.token !== undefined; //avoid cache issues
        //            }
        //        }).catch(function (error) {
        //            return checkHttpStatus(error);
        //        });
        //}

        function logout() {
            //TODO: CLEAN LOCALSTORAGE
            //$http.post('api/auth/logout');
        }

        //function isResponseSucceed(response) {
        //    return 200 == response.status;
        //}
    }
})();
