'use strict';

angular.module('sampleAngularApp')
  .service('userHttpService', function ($http) {

    var user = {
      createUser: function (obj) {
        return $http.post('/api/registerUser', obj);
      }
    };

    return user;
  });
