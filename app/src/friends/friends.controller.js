(() => {

    angular
        .module('CalculoBar')
        .controller('FriendsController', FriendsController);

    FriendsController.$inject = ['localStorageService'];

    function FriendsController(localStorageService) {
        const $ctrl = this;

        // vars
        $ctrl.init = init;

        // functions
        function init() {
            $ctrl.friend = localStorageService.get('CurrentFriend') ? localStorageService.get('CurrentFriend') : false;
            $ctrl.listFriends = localStorageService.get('Friends') ? localStorageService.get('Friends') : [];
            $ctrl.listOrders = localStorageService.get('Orders') ? localStorageService.get('Orders') : [];
            console.log('opa')
        };
    };

})();
