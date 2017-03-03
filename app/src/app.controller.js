(() => {

    angular
        .module('CalculaBar')
        .controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {
        const $ctrl = this;

        // vars
        $ctrl.isOpen = false;

        // functions
        $ctrl.toggleList = toggleList;

        function toggleList() {
            if ($ctrl.isOpen ) {
                $ctrl.isOpen = false;
            } else {
                $ctrl.isOpen = true;
            };
        };
    };

})();