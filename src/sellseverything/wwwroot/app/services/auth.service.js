(function () {
    'use strict';
    angular.module('sellseverything').service('authFactory', Auth);

    function Auth($rootScope, $location, authDataservice, $window) {

        var auth = {
            authenticate: authenticate,
            //authenticateWithExistingToken: authenticateWithExistingToken,
            logout: logout,
            initialize: initialize,
            enter: enter
        };

        return auth;

        function authenticate(credentials, callback) {
            authDataservice.loginUser(credentials)
        		.then(function (user) {
        		    $window.localStorage.loggedUser = user;

        		    if (user)
        		        $location.path(auth.homePath);
        		});
        }

        //function authenticateWithExistingToken(callback) {
        //	authDataservice.isTokenValid()
        //		.then(function (isTokenValid) {
        //			if (isTokenValid)
        //				auth.authenticated = true;

        //			$location.path(auth.path.startsWith(auth.loginPath) ? auth.homePath : auth.path);
        //		});
        //}

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
            //else {
            //    auth.authenticated = false;
            //}
        }

        //function checkAuthReturn(hasToken, callback) {
        //	if (hasToken)
        //		auth.authenticated = true;

        //	$location.path(auth.path.startsWith(auth.loginPath) ? auth.homePath : auth.path);
        //	callback && callback(auth.authenticated);
        //}
    }
})();
