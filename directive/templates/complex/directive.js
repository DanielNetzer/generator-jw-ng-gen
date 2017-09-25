(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * <%= _.classify(name) %> Object/function
     */
    function <%= _.classify(name) %> () {

        /**
         * Components Controller
         */
        function <%= _.classify(name) %>Controller () {
            /***************** PRIVATE *******************/
            var vm = this;

            /****************** PUBLIC *******************/
        }
        

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here 
        }

        
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: '<%= htmlPath %>',
            link: _link,
            controller: <%= _.classify(name) %>Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('<%= appname %>')
        .directive('<%= _.camelize(name) %>', <%= _.classify(name) %>);
})();
