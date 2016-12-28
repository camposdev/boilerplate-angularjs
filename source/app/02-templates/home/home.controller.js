(function() {

  'use strict';

  angular
    .module( 'App' )
    .controller( 'HomeController', HomeController );

    HomeController.$inject = [ '$rootScope' ];

    function HomeController( $rootScope ){

      var vm = this;

      vm.world = 'World!';

    }

})();