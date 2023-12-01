(function () {
'use strict';

var x = "hello";

angular.module('myFirstAPP', [])

//binding 
.controller('MyFirstController', function ($scope) {
//share data between view and viewmodel

    $scope.name ="sarah";
    $scope.sayHello = function () {
       return "hello coursera "
    };
});



})();