angular.module('pirateApp')
.directive('pirateForm', ['$scope', 'pirateService'  function($scope, pirateService) {


  return {
    scope: {newPirate: "="},
    templateUrl: "/views/pirateForm.html"
    link: function(scope, element, attrs) {
      scope.view.showForm = false;
      scope.view.change = function(){
        view.showForm = !view.showForm
      }
    }
  }
}])
