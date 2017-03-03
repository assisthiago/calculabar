(() => {

    angular
        .module('CalculaBar')
        .controller('ConfradesController', ConfradesController);

    ConfradesController.$inject = [];

    function ConfradesController() {
        const $ctrl = this;

        // vars
        let bar = {};

        // functions
        $ctrl.foo = foo;

        function foo() {
            console.log('working.');
        };
    };

})();