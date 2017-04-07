(() => {

    angular
        .module('CalculoBar')
        .controller('FriendsController', FriendsController);

    FriendsController.$inject = ['localStorageService'];

    function FriendsController(localStorageService) {
        var $ctrl = this;
        $ctrl.list_friends = localStorageService.get('Friends') ? localStorageService.get('Friends') : [];

        // functions
        $ctrl.addFriend = addFriend;
        $ctrl.yesHePaid = yesHePaid;

        function addFriend(name) {
            if (name) {
                var friend = {
                    name: name,
                    bill_to_pay: 0,
                };
                $ctrl.name = '';
                $ctrl.list_friends.push(friend);
                localStorageService.set('Friends', $ctrl.list_friends);
            }
            else return false;
        };

        function yesHePaid(friend) {
            var len = $ctrl.list_friends.length;
            for (var i = 0; i < len; i++) {
                if ($ctrl.list_friends[i].name == friend.name) {
                    $ctrl.list_friends.splice(i, 1);
                };
            };
            localStorageService.set('Friends', $ctrl.list_friends);
        };
    };

})();
