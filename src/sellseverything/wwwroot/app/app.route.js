(function () {
    'use strict';
    angular.module('sellseverything').config(ConfigureRoutes);

    function ConfigureRoutes($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        var customer = {
            templateUrl: '/app/components/customers/customers.html',
            controller: 'CustomersController as customers'
        }

        //var login = {
        //    templateUrl: '/app/components/login/login.html',
        //    controller: 'loginController',
        //    controllerAs: 'login'
        //}

        $routeProvider
            .when('/', customer)
            //.when('/login', login)
            .otherwise('/');
    }
})();