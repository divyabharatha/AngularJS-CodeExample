(function(angular) {
    'use strict';
    angular.module('invoice', ['finance2','cabledString'])
        .controller('InvoiceController', ['currencyConverter','doString', function(currencyConverter,doString) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;

        this.staticString = doString.stringa;
        this.total = function total(outCurr) {
            return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        };
    }]);
})(window.angular);