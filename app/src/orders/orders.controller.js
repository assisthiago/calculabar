(() => {

    angular
        .module('CalculoBar')
        .controller('OrdersController', OrdersController);

    OrdersController.$inject = ['localStorageService'];

    function OrdersController(localStorageService) {
        var $ctrl = this;

        $ctrl.bill_on_the_table = 29.99
        $ctrl.list_orders = localStorageService.get('Orders') ? localStorageService.get('Orders') : [];

        // functions
        $ctrl.addOrder = addOrder;
        $ctrl.orderCommands = orderCommands;

        function addOrder(order, price) {
            if (order, price) {
                var order = {
                    name: order,
                    price: price,
                    qty: 1,
                    bill_of_product: price
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
                        };
                        localStorageService.set('Orders', $ctrl.list_orders);
                    };
                    break;

                default:
                    console.error('Some shit must happend :(');
                    break;

            };
        };
    };

})();
