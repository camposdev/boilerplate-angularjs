(function() {

  'use strict';

  angular
    .module( 'App' )
    .controller( 'HeaderController', HeaderController );

    HeaderController.$inject = [ '$rootScope' ];

    function HeaderController( $rootScope ){

      var vm = this;

      vm.title = 'Hello, I am header!';

    }

})();