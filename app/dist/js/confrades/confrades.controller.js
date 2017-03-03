'use strict';

(function () {

    angular.module('CalculaBar').controller('ConfradesController', ConfradesController);

    ConfradesController.$inject = [];

    function ConfradesController() {
        var $ctrl = this;

        // vars
        var bar = {};

        // functions
        $ctrl.foo = foo;

        function foo() {
            console.log('working.');
        };
    };
})();