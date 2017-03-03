'use strict';

(function () {
    angular
        .module('CalculaBar')
        .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
            $stateProvider
                .state('confrades', {
                    url: '/',
                    views: {
                        content: {
                            controller: 'ConfradesController as $ctrl',
                            templateUrl: '/app/src/confrades/confrades.template.html'
                        },
                        navigation: {
                            controller: 'NavController as $ctrl'
                        }
                    }
                });

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

        });
})();
