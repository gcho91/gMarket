module.exports = {

 

  getProducts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log(req.query)
    if (!req.query.type) {

    return dbInstance.getProducts()
    .then(products=>res.status("200").send(products))
    // .catch(()=>res.status("500").send());

  }
  else {
    return dbInstance.getProductsByType(req.query.type)
    .then(products => res.status("200").send(products))
  }
  // else if (req.query.type==="men") {
  //   return dbInstance.getMenProducts()
  //   .then(products=>res.status("200").send(products))
  //   // .catch(()=>res.status("500").send());
  // }
  //
  // else if (req.query.type==="women") {
  //   return dbInstance.getWomenProducts()
  //   .then(products=>res.status("200").send(products))
  //   // .catch(()=>res.status("500").send());
  // }

  }
}
