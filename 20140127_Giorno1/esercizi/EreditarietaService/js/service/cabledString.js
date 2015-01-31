/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 26/01/15
 * Time: 18.57
 * To change this template use File | Settings | File Templates.
 */
(function(angular) {
    'use strict';
    angular.module('cabledString', ['cabledString2'])
        .factory('doStringDIVERSO', function() {
            return {stringa :"stringa 1"};
        });


})(window.angular);