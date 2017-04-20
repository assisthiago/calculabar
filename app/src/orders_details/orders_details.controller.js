(() => {

    angular
        .module('CalculoBar')
        .controller('OrdersDetailsController', OrdersDetailsController);

    OrdersDetailsController.$inject = ['localStorageService'];

    function OrdersDetailsController(localStorageService) {
        const $ctrl = this;

        // vars
        $ctrl.order = localStorageService.get('OrdersDetails');
        $ctrl.list_orders = localStorageService.get('Orders');
        $ctrl.list_friends = localStorageService.get('Friends');

        // functions

        // private functions
        _isInTheListOrder();

        // public functions
        function _isInTheListOrder() {
            const lenFriends = $ctrl.list_friends.length;
            const lenWhoPaying = $ctrl.order.whoArePaying.length;

            for (let i = 0; i < lenFriends; i++) {
                for (let k = 0; k < lenWhoPaying; k++) {
                    if (!$ctrl.list_friends[i].inTheListOrder) {
                        if ($ctrl.list_friends[i].name == $ctrl.order.whoArePaying[k]) {
                            $ctrl.list_friends[i].inTheListOrder = true;
                        } else {
                            $ctrl.list_friends[i].inTheListOrder = false;
                        };
                    };
                };
            };
        };

    };

})();
