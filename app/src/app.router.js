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
                .state('friend_detail', {
                    url: '/friend/detail',
                    views: {
                        navigation: {
                            controller: 'NavController as $ctrl',
                            templateUrl: 'app/src/nav/nav.template.html'
                        },
                        content: {
                            controller: 'FriendsController as $ctrl',
                            templateUrl: '/app/src/friends/friends.template.html'
                        }
                    }
                })
                .state('order_detail', {
                    url: '/order/detail',
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
