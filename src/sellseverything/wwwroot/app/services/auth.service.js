(function () {
    'use strict';
    angular.module('sellseverything').service('authFactory', Auth);

    function Auth($rootScope, $location, authDataservice, $window) {

        var auth = {
            authenticate: authenticate,
            getUserLogged: getUserLogged,
            logout: logout,
            initialize: initialize,
            enter: enter
        };

        return auth;

        function authenticate(credentials, callback) {
            authDataservice.loginUser(credentials)
        		.then(function (user) {
        		    if (user) {
        		        $location.path(auth.homePath);
        		        $window.localStorage.loggedUser = JSON.stringify(user);
        		        callback(true);
        		    }
                    
        		    callback(false);
        		});
        }

        function getUserLogged() {
            return JSON.parse($window.localStorage.loggedUser);
        }

        function logout() {
            delete $window.localStorage.loggedUser;
            $location.path(auth.loginPath);
        }

        function initialize() {
            auth.homePath = '/customers';
            auth.loginPath = '/login';
            auth.logoutPath = '/logout';

            if ($window.localStorage.loggedUser) {
                $location.path(auth.path);
            }

            $rootScope.$on('$routeChangeStart', function () {
                enter();
            });
        }

        function enter() {
            if ($location.path() != auth.loginPath) {
                auth.path = $location.path();

                if (!$window.localStorage.loggedUser)
                    $location.path(auth.loginPath);
            }
        }
    }
})();
