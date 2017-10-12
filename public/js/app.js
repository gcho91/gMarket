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

  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html',
    controller: 'payCtrl'
  })

  .state('checkout', {
    url: "checkout",
    templateUrl: "views/checkout.html",
    controller: "payCtrl"
  })

  $urlRouterProvider.otherwise("/")
})
