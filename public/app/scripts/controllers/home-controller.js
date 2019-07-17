'use strict';

angular.module('sampleAngularApp')
  .controller('homeCtrl', function ($scope, weatherHttpService) {
$scope.weather ={};

    $scope.search = function (city) {
      console.log(city);
      weatherHttpService.getWeatherByCity({ city })
        .then(function (res) {
          console.log("res ", res);
          $scope.weather = res.data.result;
          $scope.errMsg = undefined;
        }).catch(function (res) {
          $scope.errMsg = res.data.message;
        })
    }
  });
