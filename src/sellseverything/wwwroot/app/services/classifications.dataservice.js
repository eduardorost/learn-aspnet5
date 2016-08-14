(function () {
    'use strict';
    angular.module('sellseverything').service('classificationsDataservice', ClassificationsDataservice);

    function ClassificationsDataservice($http) {
        var classificationsDataservice = {
            getAllClassifications: getAllClassifications
        };

        return classificationsDataservice;

        function getAllClassifications() {
            return $http.get('/api/classifications');
        }
    }
})();