/**
 * Created by victorzaragoza on 20/10/2016.
 */
(function() {
    'use strict';
    angular.module('ClaudioApp')
        .factory('apiService', ApiService);

    function ApiService() {

        var apis = [
            {
                name: 'Localhost',
                url:'http://localhost:8080',
                default: true
            }
        ];

        var defaultApi = "";

        return {
            getApis: getApis,
            setApiDefault: setApiDefault,
            getApiDefault: getApiDefault
        };

        function getApis() {
            return apis;
        }

        function setApiDefault(api){
            angular.forEach(apis, function(oldApi){
                if (oldApi.name === api){
                    oldApi.default = true;
                }
                else{
                    oldApi.default = false;
                }
            })
        }

        function getApiDefault(){
            angular.forEach(apis, function(api){
                if (api.default === true){
                    defaultApi = api.url;
                }
            });
            return defaultApi;
        }

    }
}());
