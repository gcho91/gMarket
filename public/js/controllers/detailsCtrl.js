angular.module('gMarket').controller('detailsCtrl', function($scope, $stateParams, shopService) {

  console.log($stateParams.id);

 shopService.getProductById($stateParams.id).then(function(response) {
    // console.log(response[0])
    console.log(response)
    $scope.product = response[0];

    // console.log($scope.random)
    //$scope.random/dtails just makes it available to the view???
})

});
