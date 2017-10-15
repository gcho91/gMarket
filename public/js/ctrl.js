angular.module('gMarket').controller('ctrl', function($scope, service) {
  service.getProducts().then(products=> {
    $scope.products = products
  })
})
 
