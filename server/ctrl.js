module.exports = {



  getProducts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log(req.query)

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
    console.log(req.params)

    if (req.params.id) {
      return dbInstance.getProductById(req.params.id)
      .then(products => res.status("200").send(products))
    }
  }


  // else if (req.query.type==="men") {
  //   return dbInstance.getMenProducts()
  //   .then(products=>res.status("200").send(products))
  //   // .catch(()=>res.status("500").send());
  // }
  //

}
