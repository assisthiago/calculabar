(() => {
    'use strict';

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
                    url: '/friends',
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
                    url: '/',
                    views: {
                        content: {
                            controller: 'OrdersController as $ctrl',
                            templateUrl: '/app/src/orders/orders.template.html'
                        },
                        footer: {
                            templateUrl: 'app/src/nav/nav.template.html'
                        }
                    }
                })
                .state('ordersDetails', {
                    url: '/a',
                    views: {
                        content: {
                            controller: 'OrdersDetailsController as $ctrl',
                            templateUrl: '/app/src/orders_details/orders_details.template.html'
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
