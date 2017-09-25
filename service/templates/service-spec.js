(function () {
    'use strict';

    describe('<%= _.camelize(name) %>Service', function () {

        var service;

        beforeEach(function () {
            module('<%= appname %>');

            inject(function ( <%= _.camelize(name) %>Service ) {
                service = <%= _.camelize(name) %>Service ;
            });
        });

        it('should ...', function () {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
