(function () {
    'use strict';
    angular.module('sellseverything').controller('customersController', CustomersController);

    function CustomersController($scope, NgTableParams, customersDataservice, usersDataservice, classificationsDataservice, citiesDataservice) {

        var self = this;

        $scope.genders = ['F', 'M'];
        $scope.updateRegions = function (cityId) {
            $scope.filter.RegionId = 0;

            var selectedCity = $scope.cities.find(function (city) { return city.CityId == cityId });
            if (selectedCity)
                $scope.regions = selectedCity.Regions;
            else
                $scope.regions = null;
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

        customersDataservice.getAllCustomers().then(function (response) {
            $scope.tableParams = new NgTableParams({}, { dataset: response.data });
        });
    }

})();