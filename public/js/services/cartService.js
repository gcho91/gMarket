angular.module('gMarket').service('cartService', function($http) {

  //get request to show all items on cart view
  //then modify it to show only items with matching sessionID later

  this.getCartContent = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/cart"
    }).then(function(response) {
      console.log("response from cartSrv", response);
      return response;
    })
  };

  // this.getCartWithInfo = function(){
  //   return $http({
  //     method: "GET",
  //     url: "http://localhost:3000/cart"
  //   }).then(function(response) {
  //     console.log("response from cartSrv", response);
  //     return response;
  //   })
  // };

});
