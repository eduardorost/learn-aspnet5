(function () {
    'use strict';
    angular.module('sellseverything').config(ConfigureRoutes);

    function ConfigureRoutes($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        var customers = {
            templateUrl: '/app/components/customers/customers.html',
            controller: 'CustomersController as customersController'
        }

        var login = {
            templateUrl: '/app/components/login/login.html',
            controller: 'LoginController as loginController'
        }

        $routeProvider
            .when('/', customers)
            .when('/customers', customers)
            .when('/login', login)
            .otherwise('/');
    }
})();