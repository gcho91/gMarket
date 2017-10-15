angular.module('gMarket').controller('shopbytypeCtrl', function(shopService, $stateParams, $scope){

$scope.test = "Mom's spaghetti";

/*if ($stateParams.type === "men") {
  shopService.getMenProducts().then(results => {
    $scope.products = results;
  });
}

if ($stateParams.type === "women") {
  shopService.getWomenProducts().then(results => {
    $scope.products = results;
  });
}
})
*/
 

if ($stateParams.type) {
  shopService.getProductsByType($stateParams.type).then(results => {
    $scope.products = results;
  })

}
}
)
