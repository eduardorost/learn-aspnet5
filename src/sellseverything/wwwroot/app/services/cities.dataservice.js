(function () {
    'use strict';
    angular.module('sellseverything').service('citiesDataservice', CitiesDataservice);

    function CitiesDataservice($http) {
        var citiesDataservice = {
            getAllCities: getAllCities
        };

        return citiesDataservice;

        function getAllCities() {
            return $http.get('/api/cities');
        }
    }
})();