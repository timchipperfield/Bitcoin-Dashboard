function() {

  var app = angular.module("bitCoinDash", ["ngRoute"]);

  app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Bitcoin Dashboard';
    $scope.CAD = '50';
  }]);
    
}
