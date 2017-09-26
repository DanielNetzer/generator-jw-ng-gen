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
        function <%= _.classify(name) %>Controller ($log, $scope) {
            /***************** PRIVATE *******************/
            // Get the $log object and notify it that the controller have been loaded.
            $log = $log.getInstance('<%= _.classify(name) %>Controller', true);
            $log.debug("load()");

            // vm (view-model) will always bind to the controller's object and manage
            // the objects we use in the .html file.
            var vm = this;

            /**
             * OnInit, this function is part of angularjs lifecycle and will initiate
             * once all data have been passed to the controller.
             */
            vm.$onInit = function () {
                $log.info('<%= _.classify(name) %>Controller init started');
            };
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
