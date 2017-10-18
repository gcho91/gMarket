angular.module('gMarket', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")
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
    // url: "/shop/type",
    templateUrl: "views/shopbytype.html",
    controller: "shopbytypeCtrl"
  })
  //show product details by id
  .state('details', {

    url: '/details/:id',
    // url: '/shop/:id',
    //what i want is /shop/:id but only details/:id is working...
    templateUrl: "views/details.html",
    controller: "detailsCtrl"
  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html',
    controller: 'cartCtrl'
  })

  .state('checkout', {
    url: "/checkout/:id",
    templateUrl: "views/checkout.html",
    controller: "checkoutCtrl"
  })
})
