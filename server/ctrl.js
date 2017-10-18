module.exports = {



  getProducts: (req, res, next) => {

    const dbInstance = req.app.get('db');


    // if (!req.query.type) {
      if (!req.query.type){
    return dbInstance.getProducts()
    .then(products=>res.status(200).send(products))
    .catch(()=>res.status(400));
  }

    //get products type=men or type=women
    else if (req.query.type) {
      return dbInstance.getProductsByType(req.query.type)
      .then(products => res.status(200).send(products))
      .catch(()=>res.status(400));
    }
  },

  //get products by id

  getProductById: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log(req.params)

    if (req.params.id) {
      return dbInstance.getProductById(req.params.id)
      .then(products => res.status(200).send(products))
      .catch(()=>res.status(400));
    }
  },


  //post do db
  addToCart: (req, res, next) => {

    const dbInstance = req.app.get('db');

    // console.log(req.body, "FROM CTRLJS")



    dbInstance.run('SELECT * FROM cart WHERE sessionid = $1 AND productid=$2', [req.sessionID, req.body.productid ]).then(function(response) {


        if (response.length === 0) {
          //add to cart
          dbInstance.addToCart([req.body.productid, req.sessionID])
          // .then(response => res.status("200").json(response);
          .then(response => res.status(200).send(response))
          .catch(response => res.status(400));
        }

        else {
          //update quantity
          // dbInstance.run('UPDATE cart SET (quantity = quantity + 1) WHERE sessionid = $1 AND productid = $2')
          dbInstance.run('UPDATE cart SET quantity = quantity + 1 WHERE sessionid = $1 AND productid = $2', [req.sessionID, req.body.productid ])
          .then(response => res.status(200).send(response))
          .catch(response => res.status(400));
        }

      // dbInstance.addToCart([req.body.productid, req.sessionID])
      // .then(response => res.status("200").json(response));
    })

  },

  getCartContent: (req, res, next) => {

    const dbInstance = req.app.get('db');

    // dbInstance.run('SELECT * FROM cart').then(response => res.status("200").json(response));
    return dbInstance.getCartContent(req.sessionID)
    .then(response => res.status(200).json(response))
    .catch(response => res.status(400));

    //get all cart items first regardless of sessionid
  },

  getCartTotal: (req, res, next) => {

    const dbInstance = req.app.get('db');

    return dbInstance.getCartTotal(req.sessionID)
    .then(response => res.status(200).json(response))
    .catch(response => res.status(400));
    //gets cart total price
  },


//!!!!!!!
  deleteFromCart: (req, res, next) => {

    const dbInstance = req.app.get('db');
    console.log(req.params.id)
    return dbInstance.deleteItem([req.sessionID, req.params.id])

    // .then(response => res.status(200).json(response))
    .then( updatedCart => {
      dbInstance.getCartTotal(req.sessionID)
      .then(updatedTotal => res.status(200).json({updatedTotal, updatedCart }))
      .catch(response => res.status(400));
    })
    .catch(response => res.status(400));
  },


//!!!!!!

  submitOrder: (req, res, next) => {
      console.log("CTRL REQ.BODY: ", req.body);
      const dbInstance = req.app.get('db');

      const {sessionid, firstname, lastname, email, street1, street2, city, state, zip} = req.body;
    // dbInstance.submitOrder([req.sessionID])
      console.log("form info", sessionid, firstname, lastname, email, street1, street2, city, state, zip)
    //call db sql to submit new entry
    dbInstance.submitOrder([sessionid, firstname, lastname, email, street1, street2, city, state, zip])
    .then(response => res.status(200).json(response))
    .catch(err => {
      console.log(err)
    });
//what is my response? updatedTotal???

  }


}
