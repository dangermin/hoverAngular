(function() {
    'use strict';

    angular
        .module('app')
        .controller('TopspotsController', TopspotsController); 

    TopspotsController.$inject = ['TopspotsFactory','$log']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function TopspotsController(TopspotsFactory, $log) {

        var vm = this; // https://github.com/johnpapa/angular-styleguide/tree/master/a1/#controllers
        vm.title = 'TopspotsController';
       
        activate();

        function activate() {

            TopspotsFactory.getTopspots().then(
                function(response) { 
                      vm.topSpots = response.data;
                  },
                  function(error) {
                      $log.error('failure getting top spots', error);
                  });

        }
    }
})();