'use strict';

(function () {

    angular.module('CalculaBar').controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {
        var $ctrl = this;

        // vars
        $ctrl.isOpen = false;

        // functions
        $ctrl.toggleList = toggleList;

        function toggleList() {
            if ($ctrl.isOpen) {
                $ctrl.isOpen = false;
            } else {
                $ctrl.isOpen = true;
            };
        };
    };
})();