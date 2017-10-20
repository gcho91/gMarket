angular.module('gMarket').service('cartService', function($http) {

  //get request to show all items on cart view
  //then modify it to show only items with matching sessionID later

  this.getCartContent = function(){
    return $http({
      method: "GET",
      url: "/cart"
    }).then(function(response) {
      console.log("response from cartSrv", response);
      return response;
    })
  };

  this.getCartTotal = function(){
    return $http({
      method: "GET",
      url: "/cartTotal"
    }).then(function(response) {
      console.log("response from cartSrv TOTAL PRICE", response);
      return response;
    })
  };

  //!!!!!

  this.deleteFromCart = function(sessionid, productid){
    return $http.delete("/cart/delete/" + productid).then(function(response) {
      console.log("response from cartsrv trying to delete,", response);
      return response;
    })
  };
  //!!!!




});
