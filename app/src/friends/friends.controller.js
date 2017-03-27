(() => {

    angular
        .module('CalculaBar')
        .controller('FriendsController', FriendsController);

    FriendsController.$inject = [];

    function FriendsController() {
        var $ctrl = this;

        $ctrl.list_friends = [
            {
                name: 'Danilo Assis',
                bill_to_pay: '888,88'
            },
            {
                name: 'Thiago Assis',
                bill_to_pay: '888,88'
            }
        ];
    };

})();
