const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cookieParser = require('cookie-parser');
//db stuff
// const connectionString = "postgres://gcho91@localhost/gcho91";

const connectionString = "postgres://syucbyqoypxmod:836a46aec6d0261d1f913dc13c1b4d928c2c043a693232a3d60f1988e852792d@ec2-54-235-250-15.compute-1.amazonaws.com:5432/d72sol1imv8oao?ssl=true";

//ctrl for server
const ctrl = require('./server/ctrl.js')


const massiveConnection = massive(connectionString)
.then( dbInstance =>
  app.set('db', dbInstance ) );

//end above db//

const app = express();
const port = 3000;
const db = app.get("db");


app.use(express.static(__dirname + "/public"));
//send client-side code (in assets folder in original) to the user when they go to our site.
app.use(bodyParser.json());
//parse stringified JSON data coming in and assign it as JS obj to req.body

app.use(cookieParser());

app.use(session({
  secret: 'some-random-string',
  resave: true,
  saveUninitialized: true,
}))

////////////////////////////////////////////

//endpts

//in server ctrl
app.get('/api/products', ctrl.getProducts)
app.get('/api/products/:id', ctrl.getProductById)
app.post('/post', ctrl.addToCart)

app.get('/cart', ctrl.getCartContent)
app.get('/cartTotal', ctrl.getCartTotal)

app.delete('/cart/delete/:id', ctrl.deleteFromCart)
app.post('/order', ctrl.submitOrder)

// //testing update
// app.put('/update', ctrl.updateCartQuantity)



app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
})
