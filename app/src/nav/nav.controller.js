(() => {

    angular
        .module('CalculoBar')
        .controller('NavController', NavController);

    NavController.$inject = ['$state', 'localStorageService'];

    function NavController($state, localStorageService) {
        const $ctrl = this;

        // vars
        $ctrl.listFriends = localStorageService.get('Friends') ? localStorageService.get('Friends') : [];
        // $ctrl.listOrders = localStorageService.get('Orders') ? localStorageService.get('Orders') : [];
        // $ctrl.listFriends = [];
        $ctrl.listOrders = [];

        // functions
        $ctrl.addFriend = addFriend;
        $ctrl.addOrder = addOrder;
        $ctrl.delOrder = delOrder;

        // public functions
        function addFriend(name) {
            if (name) {
                const friend = {
                    name: name,
                    bill: 0.00,
                    orders: []
                };
                $ctrl.friend.name = '';

                $ctrl.listFriends.push(friend);
                localStorageService.set('Friends', $ctrl.listFriends);
            }
            else return false;
        };

        function addOrder(data, arrOfFriends) {
            if (data && data.name && data.price && arrOfFriends) {
                const arrWhoPaid = [];
                angular.forEach(arrOfFriends, (v, k) => {
                    arrWhoPaid.push(k);
                });

                const order = {
                    name: data.name,
                    price: data.price,
                    qty: 1,
                    arrWhoPaid: arrWhoPaid
                };
                $ctrl.order.name = '';
                $ctrl.order.price = '';

                $ctrl.listOrders.push(order);
                localStorageService.set('Orders', $ctrl.listOrders);
            }
            else return false;
        };

        function delOrder(idx) {
            $ctrl.listOrders.splice(idx, 1);
            localStorageService.set('Orders', $ctrl.listOrders);
        };

        function delFriend(idx) {
            $ctrl.listFriends.splice(idx, 1);
            localStorageService.set('Orders', $ctrl.listFriends);
        };
    };

})();
