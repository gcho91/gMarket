angular.module('gMarket', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  console.log("app.js");
  $stateProvider.state('home', {
    url: "/",
    templateUrl: "views/home.html",
    controller: "homeCtrl"
  })
  //show all products
  .state('shop', {
    url: "/shop",
    templateUrl: "views/shop.html",
    controller: "shopCtrl"
  })
  //show by product type
  .state('shopbytype', {
    url: "/shop/:type",
    templateUrl: "views/shopbytype.html",
    controller: "shopbytypeCtrl"
  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html',
    controller: 'cartCtrl'
  })

  .state('checkout', {
    url: "/checkout",
    templateUrl: "views/checkout.html",
    controller: "checkoutCtrl"
  })

  .state('test', {
    url: "/test",
    templateUrl: "views/test.html",
    controller: "checkoutCtrl"

  })



  //diff ctrl, same states


  $urlRouterProvider.otherwise("/")
})
