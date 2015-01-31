/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 26/01/15
 * Time: 18.57
 * To change this template use File | Settings | File Templates.
 */
(function(angular) {
    'use strict';
    angular.module('invoice')
        .factory('generateNumber', function() {
            var generator = function(){
                return Math.floor((Math.random() * 100) + 1);
            }
            return {get : generator};
        });


})(window.angular);