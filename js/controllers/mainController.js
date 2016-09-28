app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Bitcoin Dashboard';
  $scope.CAD = getCurrency;
}]);
