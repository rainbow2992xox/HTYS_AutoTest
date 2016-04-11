require ('colors');
var chai = require ("chai");
var chaiAsPromised = require ("chai-as-promised");
chai.use (chaiAsPromised);
chai.should ();

var wd;
try {
    wd = require ('wd');
} catch (err) {
    wd = require ('../../lib/main');
}

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// adding custom promise chain method
wd.addPromiseChainMethod (
    'PageHandle',
    function (mode, sleeptime) {
        return this
            .sleep (sleeptime)

            .then (function () {

                switch (mode) {
                    case Save:

                        break;

                    case Compare:

                        break;


                }


            })
            .waitForElementByCssSelector (selector, timeout)
            .elementByCssSelector (selector);
    }
);