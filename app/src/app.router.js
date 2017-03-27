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
                        }
                    }
                })
                .state('orders', {
                    url: '/orders',
                    views: {
                        content: {
                            controller: 'OrdersController as $ctrl',
                            templateUrl: '/app/src/orders/orders.template.html'
                        }
                    }
                });

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

        });
})();
