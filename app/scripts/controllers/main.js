'use strict';

/**
 * @ngdoc function
 * @name twitchTvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitchTvApp
 */

var app = angular.module('twitchTvApp');

app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.streamingUsers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "mr_coding"];

    $scope.streamsList = [];

    for (var i=0; i<$scope.streamingUsers.length; i++) {
        $.getJSON('https://api.twitch.tv/kraken/streams/'+
        $scope.streamingUsers[i] +
        '?callback=?', function(data) {
            console.log(data);
            $scope.streamsList.push(data.stream);
        });
    }


}]);
