angular.module('gMarket').component('navComponent', {
  templateUrl : 'components/navComponent.html',
  restrict: 'E',
  // controller: function($scope, $state, cartService){
  //commenting out bc i don't have cartService setup
  controller: function($scope, $state){
    var ctrl = this;

    // cartService.quantitySum().then(function(response){
    //     ctrl.quantitySum = response.data[0].sum;
    // });

  }
});
