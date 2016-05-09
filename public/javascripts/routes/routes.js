angular.module('pirateApp')
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    template:"<pirate-directive></pirate-directive>",
    controller:"PirateController"
  })
})
