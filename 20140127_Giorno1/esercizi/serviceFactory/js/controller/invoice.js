(function(angular) {
    'use strict';
    angular.module('invoice', ['generator'])
        .controller('InvoiceController', ['generateString','generateNumber', function(generateString,generateNumber) {

        this.randomString = generateString.get();
        this.randomNumber = generateNumber.get();

        this.generateN = function generateN() {

            this.randomNumber = generateNumber.get();
        };
        this.generateS = function generateS() {
            this.randomString = generateString.get();
        };

    }]);
})(window.angular);