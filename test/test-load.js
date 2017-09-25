(function () {
    'use strict';

    var assert = require('assert');

    describe('robin-ng-gen generator', function () {
        it('can be imported without blowing up', function () {
            var app = require('../app');
            assert(app !== undefined);
        });
    });

})();
