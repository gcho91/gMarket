angular.module('gMarket').service('checkoutService', function($http) {

  this.submitOrder = function(form) {
    return $http.post('/order', form)
      .then(function(response) {
        console.log("response from checkoutSrv", response)
        return response
      })
      .catch(err => {
        console.log(err)
      })
  }

})
