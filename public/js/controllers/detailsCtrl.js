angular.module('gMarket').controller('detailsCtrl', function($scope, $stateParams, shopService) {

  console.log($stateParams.id);

 shopService.getProductById($stateParams.id).then(function(response) {
    // console.log(response[0])
    console.log(response)
    $scope.product = response[0];

    // console.log($scope.random)
    //$scope.random/dtails just makes it available to the view???
})

$scope.addToCart = function(product) {
  console.log( product, "FROM SHOPCTRL")

  shopService.addToCart( product ).then(function(response) {
    console.log(response);
    alert("You added an item to the cart! ")

  })
}

// shopService.getSessionID().then(function(response) {
//   console.log("sessionID: ", response.data);
//   $scope.sessionID = response.data;
//
//
// })

});
