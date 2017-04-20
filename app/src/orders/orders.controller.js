(() => {

    angular
        .module('CalculoBar')
        .controller('OrdersController', OrdersController);

    OrdersController.$inject = ['$state', 'localStorageService'];

    function OrdersController($state, localStorageService) {
        const $ctrl = this;

        // vars
        $ctrl.list_orders = localStorageService.get('Orders') ? localStorageService.get('Orders') : [];
        $ctrl.list_friends = localStorageService.get('Friends') ? localStorageService.get('Friends') : [];
        $ctrl.list_friends_in_order = [];
        $ctrl.isSomebodyPayingOrder = false;
        $ctrl.bill_on_the_table = 888.88;

        // functions
        $ctrl.addOrder = addOrder;
        $ctrl.orderCommands = orderCommands;
        $ctrl.markThisFriendToPay = markThisFriendToPay;
        $ctrl.seeOrdersDetails = seeOrdersDetails;

        // private functions
        function _isSomebodyPayingOrder() {
            if ($ctrl.list_friends_in_order.length == 0) {
                $ctrl.isSomebodyPayingOrder = false;
            } else {
                $ctrl.isSomebodyPayingOrder = true;
            };
        };

        function _saveOrderInFriends(order, list_friends_in_order) {
            const lenWhoPaying = list_friends_in_order.length;
            const lenFriends = $ctrl.list_friends.length;

            for (let i = 0; i < lenFriends; i++) {
                for (let j = 0; j < lenWhoPaying; j++) {
                    if ($ctrl.list_friends[j].name == list_friends_in_order[i]) {
                        $ctrl.list_friends[j].orders.push(order);
                    };
                };
            };
            // localStorageService.set('Friends', $ctrl.list_friends);
        };

        // public functions
        function addOrder(order_name, price) {
            if (order_name && price) {
                const order = {
                    name: order_name,
                    price: price,
                    qty: 1,
                    bill_of_product: price,
                    whoArePaying: $ctrl.list_friends_in_order
                };
                $ctrl.order = '';
                $ctrl.price = '';
                // $ctrl.bill_on_the_table += price;
                $ctrl.list_orders.push(order);
                localStorageService.set('Orders', $ctrl.list_orders);
                _saveOrderInFriends(order_name, $ctrl.list_friends_in_order);
            }
            else return false;
        };

        function orderCommands(order, action) {
            let qty;
            switch (action) {
                case 'decrease':
                    qty = (parseInt(order.qty) - 1 <= 0) ? 1 : parseInt(order.qty) - 1;
                    order.qty = qty;
                    if (qty != 1) {
                        // $ctrl.bill_on_the_table /= (qty + 1);
                    };
                    break;

                case 'increase':
                    qty = parseInt(order.qty) + 1;
                    order.qty = qty;
                    // $ctrl.bill_on_the_table *= qty;
                    break;

                case 'remove':
                    const len = $ctrl.list_orders.length;
                    for (let i = 0; i < len; i ++) {
                        if ($ctrl.list_orders[i].name == order.name) {
                            $ctrl.list_orders.splice(i, 1);
                            localStorageService.set('Orders', $ctrl.list_orders);
                            // $ctrl.bill_on_the_table -= order.price;
                            return true;
                        };
                    };
                    break;

                default:
                    console.error('Some shit must happend :(');
                    break;
            };
        };

        function markThisFriendToPay(friend, e) {
            let i = 0;
            const len = $ctrl.list_friends_in_order.length;

            if (e.target.checked) {
                if (len == 0) {
                    $ctrl.list_friends_in_order.push(friend.name);
                    _isSomebodyPayingOrder();
                }
                else {
                    for (i; i < len; i++) {
                        if (friend.name != $ctrl.list_friends_in_order[i]) {
                            $ctrl.list_friends_in_order.push(friend.name);
                            _isSomebodyPayingOrder();
                            return true;
                        };
                    };
                };
            }
            else {
                for (i; i < len; i++) {
                    if (friend.name == $ctrl.list_friends_in_order[i]) {
                        $ctrl.list_friends_in_order.splice(i, 1);
                        _isSomebodyPayingOrder();
                        return true;
                    };
                };
            };
        };

        function seeOrdersDetails(order) {
            localStorageService.set('OrdersDetails', order);
            $state.go('ordersDetails');
        };

    };

})();
