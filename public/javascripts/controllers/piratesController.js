angular.module("pirateApp")
.controller("PirateController", ['$scope', 'pirateService', function($scope, pirateService) {
  $scope.view = {};
  $scope.view.pirateTest = "Avast matey!"

  pirateService.all()
  .then(function(pirates){
    $scope.view.pirates = pirates;
  })
  .catch(function(err){
    console.log(err);
  })

  // $scope.edit = function(pirate){
  //   pirateService.edit(pirate);
  // }


}])
