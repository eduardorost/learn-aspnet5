(function () {
    'use strict';
    angular.module('sellseverything').service('usersDataservice', UsersDataservice);

    function UsersDataservice($http) {
        var usersDataservice = {
            getAllUsers: getAllUsers
        };

        return usersDataservice;

        function getAllUsers() {
            return $http.get('/api/users');
        }
    }
})();