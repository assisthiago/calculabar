(() => {

    angular
        .module('CalculoBar')
        .controller('OrdersController', OrdersController);

    OrdersController.$inject = [];

    function OrdersController() {
        var $ctrl = this;

        $ctrl.bill_on_the_table = "888,88"
        $ctrl.list_orders = [
            {
                name: 'Gurjão de frango',
                price: '888,88',
                qty: '1',
                bill_of_product: '888,88'
            }
        ];

        // functions
        $ctrl.addOrder = addOrder;
        $ctrl.orderCommands = orderCommands;

        function addOrder(order, price) {
            if (order, price) {
                var order = {
                    name: order,
                    price: price,
                    qty: '1',
                    bill_of_product: '888,88'
                };
                $ctrl.list_orders.push(order);
                $ctrl.order = '';
                $ctrl.price = '';
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
                    $ctrl.list_orders.forEach((obj, i, arr) => {
                        if (obj.name == order.name) {
                            arr.splice(i, 1);
                        };
                    });
                    break;

                default:
                    console.error('Some shit must happend :(');
                    break;

            };
        };
    };

})();
