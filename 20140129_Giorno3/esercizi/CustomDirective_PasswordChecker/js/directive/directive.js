/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 15.35
 * To change this template use File | Settings | File Templates.
 */
angular.module('directives', [])
    .directive('validateEquals', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                function validateEqual(myValue) {
                    var valid = (myValue === scope.$eval(attrs.validateEquals));
                    ngModelCtrl.$setValidity('equal', valid);
                    return valid ? myValue : undefined;
                }

                ngModelCtrl.$parsers.push(validateEqual);
                ngModelCtrl.$formatters.push(validateEqual);

                scope.$watch(attrs.validateEquals, function() {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        };
    });