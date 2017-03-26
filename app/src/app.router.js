'use strict';

(function () {
    angular
        .module('CalculaBar')
        .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
            $stateProvider
                .state('friends', {
                    url: '/',
                    views: {
                        content: {
                            controller: 'FriendsController as $ctrl',
                            templateUrl: '/app/src/friends/friends.template.html'
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
