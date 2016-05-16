angular.module("pirateApp")
.controller("PirateController", ['$scope', 'pirateService', function($scope, pirateService) {
  $scope.view = {};
  $scope.view.pirateTest = "Avast matey!";
  $scope.view.newPirate = {};

  pirateService.all()
  .then(function(pirates){
    $scope.view.pirates = pirates;
  })
  .catch(function(err){
    console.log(err);
  })





}])
