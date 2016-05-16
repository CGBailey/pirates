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
  create: function() {
    var deferred = $q.defer();

    $http.post('/api/v1/pirates').then(function(response){
      deffered.resolve("Welcome aboard matey!")
    }).catch(function(err) {
      deffered.reject(err)
    })

    return deffered.promise
  }

  }
})
