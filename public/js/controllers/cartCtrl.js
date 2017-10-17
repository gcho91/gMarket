angular.module('gMarket').controller('cartCtrl', function($scope, cartService){

  $scope.test = "Logging from CartCtrl"

  cartService.getCartContent().then(function(response) {
    console.log(response.data, "from cartctrl");
    $scope.shoppingcart = response.data;

  })

  cartService.getCartTotal().then(function(response) {
    console.log("CartTotalData", response.data[0].sum);
    $scope.cartTotal = response.data[0].sum
  })
})
