angular.module('mamae', []);

angular.module('mamae').controller('MainController', function($scope) {

  $scope.showConfetti = false;
  var popConfetti = function() {
    $scope.showConfetti = !$scope.showConfetti;
    alert('shake');
  }
  $scope.popConfetti = popConfetti;

  // Shake it off!
  var myShakeEvent = new Shake({ threshold: 15 });
  myShakeEvent.start();
  window.addEventListener('shake', popConfetti, false);

});
