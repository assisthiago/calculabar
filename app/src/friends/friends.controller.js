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

        // functions
        $ctrl.addFriend = addFriend;
        $ctrl.yesHePaid = yesHePaid;

        function addFriend(name) {
            if (name) {
                var friend = {
                    name: name,
                    bill_to_pay: '888,88',
                };
                $ctrl.list_friends.push(friend);
                $ctrl.name = '';
            }
            else return false;
        };

        function yesHePaid(friend) {
            $ctrl.list_friends.forEach((obj, i, arr) => {
                if (obj.name == friend.name) {
                    arr.splice(i, 1);
                };
            });
        };
    };

})();
