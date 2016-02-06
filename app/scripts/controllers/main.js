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

    $scope.streamingUsers = ["freecodecamp", "riotgames", "forsenlol", "nextgentactics", "kinggothalion", "kingluii718", "chainerfails", "kungentv", "cloudmighty", "jendenise", "uknighted", "mattmelvin", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "mr_coding"];

    $scope.streamsList = [];

    for (var i=0; i<$scope.streamingUsers.length; i++) {
        var userName = $scope.streamingUsers[i];
        $.getJSON('https://api.twitch.tv/kraken/streams/'+
        userName +
        '?callback=?', updateFor(userName));
    }

    function updateFor(userName) {
        return function(data) {
            data.name = userName;
            data.isOnline = true;
            if (data.stream==null) {
                data.isOnline = false;
            }
            console.log(data);
            $scope.streamsList.push(data);
            $scope.$apply();
        }
    }

}]);
