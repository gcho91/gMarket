angular.module('gMarket').controller('checkoutCtrl', function($stateParams, $scope, checkoutService){

  console.log($stateParams.id, "GETTING FROM CHECKCTRL")
  $scope.sessionid = $stateParams.id;

  $scope.submitOrder = function(form, sessionid) {
    console.log(form, sessionid, "SUBMITORDER FROM CHECKOUTCTRLLLLLL")
    form.sessionid = sessionid
    console.log("form including session id:",form)
    checkoutService.submitOrder(form)
      .then(response => {
        $scope.orderid = response.data[0].orderid
      })
      .catch(err => {
        console.log(err)
      })
  }



})

  //submit sessionid, form with ng-model,
  //create an entry in db for ORDERS

  //rseponse -> return order #
