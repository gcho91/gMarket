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
    dbInstance.getProducts()
    .then(products=>res.status("200").send(products))
    .catch(()=>res.status("500").send());

  }
}
