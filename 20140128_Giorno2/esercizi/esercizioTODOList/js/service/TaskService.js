/**
 * Created with JetBrains PhpStorm.
 * User: Enrico
 * Date: 27/01/15
 * Time: 15.13
 * To change this template use File | Settings | File Templates.
 */

(function(angular) {
    'use strict';
    angular.module('Task', [])
        .factory('retriveTasks', function($http) {

                /*$http.get('/giorno2/esercizioTODOList/data/tasks.db').
                    success(function(data, status, headers, config) {
                        todos.push(data);
                    }).
                    error(function(data, status, headers, config) {
                       console.log("errore");
                    });*/
                /*var  todos = [{
                    action: "TODO 1 ",
                    complete: false
                }, {
                    action: "TODO 2",
                    complete: false
                }, {
                    action: "TODO 3",
                    complete: true
                }];*/

            return { getTask :  function(){
                return $http.get('/giorno2/esercizioTODOList/data/tasks.db').
                //return $http.jsonp('http://www.aleandrienrico.com/temp/tasks.db').
                        error(function(data, status, headers, config) {
                            console.log("Errore recupero servizi");
                        }).
                        then(function(response)
                        {
                            if(angular.isObject(response.data))
                            {
                                return response.data;
                            }
                            else
                            {
                                return null;
                            }
                        });
                }
            };
        });


})(window.angular);