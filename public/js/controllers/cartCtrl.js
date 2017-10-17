angular.module('gMarket').controller('cartCtrl', function($scope, cartService){

  $scope.test = "Logging from CartCtrl"

  cartService.getCartContent().then(function(response) {
    console.log(response.data, "from cartctrl");
    $scope.shoppingcart = response.data;

  })

  cartService.getCartTotal().then(function(response) {
    console.log("CartTotalData", response.data[0].sum);
    $scope.cartTotal = response.data[0].sum;
  })


  $scope.deleteFromCart = function(sessionID, productID) {
    // console.log(sessionID, productID, "LOGGING FROM CARTCTRL")
     cartService.deleteFromCart(sessionID, productID)
     .then(response => {
       $scope.shoppingcart = response.data.updatedCart
      $scope.cartTotal = response.data.updatedTotal[0].sum;
     })

  }

})
