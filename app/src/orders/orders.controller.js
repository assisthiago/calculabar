(() => {

    angular
        .module('CalculoBar')
        .controller('OrdersController', OrdersController);

    OrdersController.$inject = ['localStorageService'];

    function OrdersController(localStorageService) {
        var $ctrl = this;

        // mocks
        $ctrl.bill_on_the_table = 29.99

        // vars
        $ctrl.list_orders = localStorageService.get('Orders') ? localStorageService.get('Orders') : [];
        $ctrl.list_friends = localStorageService.get('Friends') ? localStorageService.get('Friends') : [];
        $ctrl.list_friends_in_order = [];
        $ctrl.isSomebodyPayingOrder = false;

        // functions
        $ctrl.addOrder = addOrder;
        $ctrl.orderCommands = orderCommands;
        $ctrl.markThisFriendToPay = markThisFriendToPay;

        // private functions
        function _isSomebodyPayingOrder() {
            if ($ctrl.list_friends_in_order.length == 0) {
                $ctrl.isSomebodyPayingOrder = false;
            } else {
                $ctrl.isSomebodyPayingOrder = true;
            };
        };

        // public functions
        function addOrder(order, price) {
            if (order, price) {
                var order = {
                    name: order,
                    price: price,
                    qty: 1,
                    bill_of_product: price,
                    whoArePaying: $ctrl.list_friends_in_order
                };
                $ctrl.order = '';
                $ctrl.price = '';
                $ctrl.list_orders.push(order);
                localStorageService.set('Orders', $ctrl.list_orders);
            }
            else return false;
        };

        function orderCommands(order, action) {
            switch (action) {
                case 'decrease':
                    var qty = (parseInt(order.qty) - 1 <= 0) ? 1 : parseInt(order.qty) - 1;
                    order.qty = qty;
                    break;

                case 'increase':
                    var qty = parseInt(order.qty) + 1;
                    order.qty = qty;
                    break;

                case 'remove':
                    var len = $ctrl.list_orders.length;
                    for (var i = 0; i < len; i ++) {
                        if ($ctrl.list_orders[i].name == order.name) {
                            $ctrl.list_orders.splice(i, 1);
                            localStorageService.set('Orders', $ctrl.list_orders);
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
            var i = 0;
            var len = $ctrl.list_friends_in_order.length;

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

    };

})();
