'use strict';

angular.module('sampleAngularApp')
  .controller('homeCtrl', function ($window, $scope, $http) {
    console.log($window.location.origin);

    $scope.user = {};

    $scope.getInfo = function () {
      var userObj = {
        name: $scope.user.name,
        email: $scope.user.email,
        phone: $scope.user.phone,
        description: $scope.user.description
      };

      console.log(userObj)

    }
  });
