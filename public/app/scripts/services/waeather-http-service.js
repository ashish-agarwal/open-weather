'use strict';

angular.module('sampleAngularApp')
  .service('weatherHttpService', function ($http) {

    var weather = {
      getWeatherByCity: function (obj) {
        return $http.get('/api/v1/city?city='+obj.city);
      }
    };

    return weather;
  });
