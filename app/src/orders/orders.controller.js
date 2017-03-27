(() => {

    angular
        .module('CalculaBar')
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
    };

})();
