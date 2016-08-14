(function () {
    'use strict';
    angular.module('sellseverything').directive('searchCustomersDirective', SearchCustomersDirective);

    function SearchCustomersDirective($filter, customersDataservice, usersDataservice, classificationsDataservice, citiesDataservice) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/shared/customers/search-customers.html',
            controller: 'customersController',
            controllerAs: 'vm',
            scope: {
                userLogged: '=',
                customers: '='
            },
            link: linkFunc
        };

        return directive;

        function linkFunc(scope) {
            scope.filter = {
                UserLoggedId: scope.userLogged.UserId
            }

            scope.genders = ['F', 'M'];

            usersDataservice.getAllUsers().then(function (response) {
                scope.users = response.data;
            });

            classificationsDataservice.getAllClassifications().then(function (response) {
                scope.classifications = response.data;
            });

            citiesDataservice.getAllCities().then(function (response) {
                scope.cities = response.data;
            });

            customersDataservice.filterCustomers(scope.filter).then(function (response) {
                scope.customers = response.data;
            });

            scope.updateRegions = updateRegions;
            scope.clear = clear;
            scope.search = search;

            function updateRegions(cityId) {
                scope.filter.RegionId = 0;
                if (scope.cities) {
                    var selectedCity = scope.cities.find(function (city) { return city.CityId == cityId });
                    if (selectedCity)
                        scope.regions = selectedCity.Regions;
                    else
                        scope.regions = null;
                }
            };

            function search() {
                scope.filter.LastPurchase = $filter('date')(scope.filter.LastPurchaseField, 'yyyy-MM-dd');
                scope.filter.Until = $filter('date')(scope.filter.UntilField, 'yyyy-MM-dd');
                customersDataservice.filterCustomers(scope.filter).then(function (response) {
                    scope.customers = response.data;
                    scope.filter.LastPurchase = null;
                    scope.filter.Until = null;
                });
            };

            function clear() {
                scope.filter = {
                    UserLoggedId: scope.userLogged.UserId
                };
            };
        }
    }
})();
