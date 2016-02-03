angular.module('mamae', []);

angular.module('mamae').controller('MainController', function($scope) {

  $scope.showConfetti = false;
  $scope.popConfetti = function() {
    $scope.showConfetti = !$scope.showConfetti;
  }
  var myShakeEvent = new Shake({
      threshold: 15
  });

  // Shake it off!
  myShakeEvent.start();
  window.addEventListener('shake', shakeEventDidOccur, false);
  function shakeEventDidOccur () {
    $scope.popConfetti();
  }
});
