angular.module('gMarket').service('shopService', function($http){


//get request to show on html

  this.getProducts = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/api/products"
    }).then(function(response) {
      console.log(response.data);
      var results = response.data;
      return results;
    })
  };


  this.getProductsByType = function (type){
    return $http({
      method: "GET",
      url: `http://localhost:3000/api/products?type=`+ type
    }).then(function(response) {
      // console.log(response.data);
      var results = response.data;
      return results;
    })
  }

  this.getProductById = function(id) {
    return $http({
      method: "GET",
      url: `http://localhost:3000/api/products/` + id
    }).then(function(response) {
      console.log(response.data);
      var results = response.data;
      return results;
    })
  }

  // this.getSessionID = function() {
  //   return $http.get("/test3")
  //   console.log(sessionID, "getSessionServce")
  // }




  this.addToCart = function( product){
    console.log( product, "from shopService")
    return $http.post('/post', product );
  }




});
