/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 28/01/15
 * Time: 15.35
 * To change this template use File | Settings | File Templates.
 */
angular.module('directives', [])
    .directive('button', function() {
        return {
            restrict: 'E',
            compile: function(element, attributes) {
                element.addClass('btn');
                if ( attributes.type === 'submit' ) {
                    element.addClass('btn-primary');
                }
                if ( attributes.size ) {
                    element.addClass('btn-' + attributes.size);
                }
            }
        };
    });