angular.module('gMarket', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "/",
    templateUrl: "views/home.html",
    controller: "homeCtrl"
  })

  .state('shop', {
    url: "/shop",
    templateUrl: "views/shop.html",
    controller: "shopCtrl"
  })

  // .state('category', {
  //   url: "/shop/:category,"
  // control
  // })

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
