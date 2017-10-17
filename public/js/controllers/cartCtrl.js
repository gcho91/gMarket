angular.module('gMarket').controller('cartCtrl', function($scope, cartService){

  $scope.test = "Logging from CartCtrl"

  cartService.getCartContent().then(function(response) {
    console.log(response.data, "from cartctrl");
    $scope.shoppingcart = response.data;
  })

  // cartService.getCartWithInfo().then(function(response) {
  //   console.log(response.data);
  //   $scope.cart = response.data
  // })
})
