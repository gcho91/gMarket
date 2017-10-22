angular.module('gMarket').controller('homeCtrl', function($scope, shopService){
  $scope.test = "yummy cupcakes";

  shopService.getProducts().then(function(response) {
    $scope.homeproducts = [response[0], response[1], response[2], response[3]]
    console.log($scope.homeproducts)
  })

})
