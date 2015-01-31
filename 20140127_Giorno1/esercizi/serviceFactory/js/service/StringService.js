/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 26/01/15
 * Time: 18.57
 * To change this template use File | Settings | File Templates.
 */
(function(angular) {
    'use strict';
    angular.module('generator', [])
        .factory('generateString', function() {
            var generator = function(){
                var stringa = "";
                for(var i = 0 ; i < 10; i++){
                    var number = Math.floor((Math.random() * 24) + 1);
                    stringa += String.fromCharCode(97 + number);
                }
                return stringa;
            }
            return {get : generator};
        });


})(window.angular);