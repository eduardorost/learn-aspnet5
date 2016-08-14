(function () {
    'use strict';
    angular.module('sellseverything').config(ConfigureRoutes);

    function ConfigureRoutes($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        var customers = {
            templateUrl: '/app/components/customers/customers.html',
            controller: 'customersController as customersCtr'
        }

        var login = {
            templateUrl: '/app/components/login/login.html',
            controller: 'loginController as loginCtr'
        }

        $routeProvider
            .when('/', customers)
            .when('/customers', customers)
            .when('/login', login)
            .otherwise('/');
    }
})();