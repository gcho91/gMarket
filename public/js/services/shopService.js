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
 
  //men
  // this.getMenProducts = function(){
  //   return $http({
  //     method: "GET",
  //     url: `http://localhost:3000/api/products?type=men`
  //   }).then(function(response) {
  //     console.log(response.data);
  //     var results = response.data;
  //     return results;
  //   })
  // };

  //women
  // this.getWomenProducts = function(){
  //   return $http({
  //     method: "GET",
  //     url: `http://localhost:3000/api/products?type=women`
  //   }).then(function(response) {
  //     console.log(response.data);
  //     var results = response.data;
  //     return results;
  //   })
  // };


  this.getProductsByType = function (type){
    return $http({
      method: "GET",
      url: `http://localhost:3000/api/products?type=`+ type
    }).then(function(response) {
      console.log(response.data);
      var results = response.data;
      return results;
    })
  }


});
