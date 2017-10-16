module.exports = {



  getProducts: (req, res, next) => {

    const dbInstance = req.app.get('db');
    console.log(req.session)

    // if (!req.query.type) {
      if (!req.query.type){
    return dbInstance.getProducts()
    .then(products=>res.status("200").send(products))
    // .catch(()=>res.status("500").send());
  }

//get products type=men or type=women
  else if (req.query.type) {
    return dbInstance.getProductsByType(req.query.type)
    .then(products => res.status("200").send(products))
  }
},

  //get products by id

  getProductById: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log(req.params)

    if (req.params.id) {
      return dbInstance.getProductById(req.params.id)
      .then(products => res.status("200").send(products))
    }
  },

  //post do db
  addToCart: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log(req.body, "FROM CTRLJS")
    console.log(req.sessionID, "SESSION: ")

    dbInstance.addToCart([req.body.productid, req.sessionID])
    .then(response => res.status("200").json(response));
  }



  // else if (req.query.type==="men") {
  //   return dbInstance.getMenProducts()
  //   .then(products=>res.status("200").send(products))
  //   // .catch(()=>res.status("500").send());
  // }
  //

}
