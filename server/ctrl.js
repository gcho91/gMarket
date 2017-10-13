module.exports = {

  // getProducts(req, res) {
  //
  //   req.app
  //   .get('db')
  //   .run('select * from products ORDER BY productid;')
  //   .then(products => res.json(products));
  // }

  // getProducts: (req, res, next) => {
  //   req.app
  //   .get('db')
  //   .run('select * from products ORDER BY productid;')
  //   .then(products => res.json(products));
  // }

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
