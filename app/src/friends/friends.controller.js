(() => {

    angular
        .module('CalculaBar')
        .controller('AmigosController', AmigosController);

    AmigosController.$inject = [];

    function AmigosController() {
        const $ctrl = this;

        // vars
        let bar = {};

        // functions
        $ctrl.addFriend = addFriend;

        function addFriend() {
            console.log($ctrl.name);
        };
    };

})();