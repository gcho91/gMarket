angular.module('gMarket').controller('shopCtrl', function(shopService, $scope){

$scope.test = "Giao's My Boss- I Do What She Says";

shopService.getProducts().then(function(response) {
  // console.log(response)
  $scope.products = response;
})

// shopService.getSessionID().then(function(response) {
//   console.log("sessionID: ", response.data);
//   $scope.sessionID = response.data;
//   //sessionID now I can use on SCOPE OMG
//
// })

//moving to detaislctrl
// $scope.addToCart = function(productid) {
//   console.log( productid, "FROM SHOPCTRL")
//   shopService.addToCart().then(function(response) {
//     console.log(response);
//   })
// }

})
