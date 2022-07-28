(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
    $scope.name = "John";
    $scope.sayHello = function () {
        return "Hello John";
    };
});

})();
