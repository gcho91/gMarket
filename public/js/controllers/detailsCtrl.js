angular.module('gMarket').controller('detailsCtrl', function($scope, $stateParams, shopService) {

  console.log($stateParams.id);
  shopService.getProductById($stateParams.id).then(function(response) {
    console.log(response[0])
    $scope.product = response[0];
})

});
