angular.module('mamae', []);

angular.module('mamae').controller('MainController', function($scope) {

  $scope.showConfetti = false;
  $scope.popConfetti = function() {
    $scope.showConfetti = !$scope.showConfetti;
  }

  // Shake it off!
  var myShakeEvent = new Shake({ threshold: 15 });
  myShakeEvent.start();
  window.addEventListener('shake', $scope.popConfetti, false);

});
