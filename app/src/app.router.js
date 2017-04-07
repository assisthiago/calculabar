'use strict';

(function () {
    angular
        .module('CalculoBar')
        .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        content: {
                            templateUrl: '/app/src/home/home.template.html'
                        }
                    }
                })
                .state('friends', {
                    url: '/',
                    views: {
                        content: {
                            controller: 'FriendsController as $ctrl',
                            templateUrl: '/app/src/friends/friends.template.html'
                        },
                        footer: {
                            templateUrl: 'app/src/nav/nav.template.html'
                        }
                    }
                })
                .state('orders', {
                    url: '/orders',
                    views: {
                        content: {
                            controller: 'OrdersController as $ctrl',
                            templateUrl: '/app/src/orders/orders.template.html'
                        },
                        footer: {
                            templateUrl: 'app/src/nav/nav.template.html'
                        }
                    }
                });

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

        });
})();
