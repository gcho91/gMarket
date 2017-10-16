angular.module('gMarket').controller('detailsCtrl', function($scope, $stateParams, shopService) {

  console.log($stateParams.id);
  shopService.getProductById($stateParams.id).then(function(response) {
    console.log(response)
    // $scope.product = response.data;
})

});
