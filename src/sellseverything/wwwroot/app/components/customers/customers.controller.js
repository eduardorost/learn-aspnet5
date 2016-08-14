(function () {
    'use strict';
    angular.module('sellseverything').controller('customersController', CustomersController);

    function CustomersController($scope, $filter, NgTableParams, authFactory, customersDataservice, usersDataservice, classificationsDataservice, citiesDataservice) {

        var self = this;

        $scope.userLogged = authFactory.getUserLogged();

        $scope.filter = {
            UserLoggedId: $scope.userLogged.UserId
        }

        $scope.genders = ['F', 'M'];
        $scope.updateRegions = function (cityId) {
            $scope.filter.RegionId = 0;
            if ($scope.cities) {
                var selectedCity = $scope.cities.find(function (city) { return city.CityId == cityId });
                if (selectedCity)
                    $scope.regions = selectedCity.Regions;
                else
                    $scope.regions = null;
            }
        };

        $scope.clear = function () {
            $scope.filter = {
                UserLoggedId: $scope.userLogged.UserId
            };
        };

        $scope.search = function () {
            $scope.filter.LastPurchase = $filter('date')($scope.filter.LastPurchaseField, 'yyyy-MM-dd');
            $scope.filter.Until = $filter('date')($scope.filter.UntilField, 'yyyy-MM-dd');
            customersDataservice.filterCustomers($scope.filter).then(function (response) {
                $scope.tableParams = new NgTableParams({}, { dataset: response.data });
                $scope.filter.LastPurchase = null;
                $scope.filter.Until = null;
            });
        };

        usersDataservice.getAllUsers().then(function (response) {
            $scope.users = response.data;
        });

        classificationsDataservice.getAllClassifications().then(function (response) {
            $scope.classifications = response.data;
        });

        citiesDataservice.getAllCities().then(function (response) {
            $scope.cities = response.data;
        });

        customersDataservice.filterCustomers($scope.filter).then(function (response) {
            $scope.tableParams = new NgTableParams({}, { dataset: response.data });
        });
    }

})();