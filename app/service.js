(function() {
    'use strict';

    angular
        .module('app')
        .factory('TopspotsFactory', TopspotsFactory);  // https://docs.angularjs.org/guide/services

    TopspotsFactory.$inject = ['$http', '$q', '$log'];  // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function TopspotsFactory($http, $q, $log) {

        var service = {
            getTopspots: getTopspots
        };

        return service;


        function getTopspots() {

          var defer = $q.defer();
          $http({
            method: 'GET',
            url: 'app/topspots.json'})
          .then(
          function(response) {
            if(typeof response.data === 'object'){
          defer.resolve(response);
          toastr.success('We have top spots!');
        } else {
          defer.reject(response);
          toastr.warning('no hot spots found<br/>' + response.config.url);
        }
          }, 
          // failure
          function(error) {
              defer.reject(error);
              $log.error(error);
              toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
          });

          return defer.promise;
        }
    }
})();

