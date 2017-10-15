angular.module('gMarket').service('service', function($http) {
  this.getProducts = function() {
    return $http.get('/api/products');
  };

});
 
