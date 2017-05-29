(() => {
    'use strict';

    angular
        .module('CalculoBar')
        .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        navigation: {
                            controller: 'NavController as $ctrl',
                            templateUrl: 'app/src/nav/nav.template.html'
                        },
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
                })
                .state('ordersDetails', {
                    url: '/orders-details',
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
