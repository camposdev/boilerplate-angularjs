(function() {

  'use strict';

  angular
    .module( 'App', [
      'ngAnimate', 
      'ngCookies', 
      'ngSanitize', 
      'ui.router'
    ]);

})();
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