(function() {

  'use strict';

  angular
    .module( 'App' )
    .config( appConfig );

    appConfig.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];

    function appConfig( $stateProvider, $urlRouterProvider, $locationProvider ){

      $locationProvider.html5Mode(false);

      // Routes
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/02-templates/home/home.html'
        })

    }

})();