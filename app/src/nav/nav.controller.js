(() => {

    angular
        .module('CalculoBar')
        .controller('NavController', NavController);

    NavController.$inject = ['$state', 'localStorageService'];

    function NavController($state, localStorageService) {
        const $ctrl = this;

        // vars
        $ctrl.foo = foo;

        $ctrl.list_friends = [
            {
                name: 'Assis Assis',
                bill: 888.88
            },
            {
                name: 'Assis Thiago',
                bill: 888.88
            },
            {
                name: 'Thiago Assis',
                bill: 888.88
            },
            {
                name: 'Thiago Thiago',
                bill: 888.88
            }
        ];

        function foo(param) {
            console.log(param);
        };
    };

})();
