angular.module('pirateApp')
.service('pirateService', function($http, $q) {
  return {
    all: function() {
      var deferred = $q.defer();

      $http.get('/api/v1/pirates')
      .then(function(response) {
        deferred.resolve(response.data)
      }).catch(function(err) {
        deferred.reject(err)
      })



      return deferred.promise
    }
  }
})
