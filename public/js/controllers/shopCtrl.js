angular.module('gMarket').controller('shopCtrl', function(shopService, $scope){

$scope.test = "Giao's My Boss- I Do What She Says";

shopService.getProducts().then(function(response) {
  // console.log(response)
  $scope.products = response;
})


})
