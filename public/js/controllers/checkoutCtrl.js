angular.module('gMarket').controller('checkoutCtrl', function($stateParams, $scope, checkoutService, $location){

  console.log($stateParams.id, "GETTING FROM CHECKCTRL")
  $scope.sessionid = $stateParams.id;

  $scope.submitOrder = function(form, sessionid) {

    console.log(form, sessionid, "SUBMITORDER FROM CHECKOUTCTRLLLLLL");

    form.sessionid = sessionid;

    console.log("form including session id:",form)

    checkoutService.submitOrder(form)
      .then(response => {
        $scope.orderid = response.data[0].orderid;
        alert("Thanks FOR ORDERING");
        $location.path('/')
        //alerts then redirects
      })
      .catch(err => {
        console.log(err)
      })

      // //
      // $location.path('#!/confirmation.html') //take to confirmation
  }



})

  //submit sessionid, form with ng-model,
  //create an entry in db for ORDERS

  //rseponse -> return order #
