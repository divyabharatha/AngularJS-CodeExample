(function(angular) {
    'use strict';
    angular.module('finance3', [])
        .factory('currencyConverter', function() {
            var currencies = ['USD', 'EUR', 'CNY'];
            var usdToForeignRates = {
                USD: 1,
                EUR: 1,
                CNY: 1
            };
            var convert = function (amount, inCurr, outCurr) {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            };

            return {
                currencies: currencies,
                convert: convert
            };
        });
})(window.angular);