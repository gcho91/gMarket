angular.module('gMarket').controller('shopCtrl', function(shopService, $scope){

$scope.test = "Mom's spaghetti";

shopService.getProducts().then(function(response) {
  // console.log(response)
  $scope.products = response;
})

})
 
