const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cookieParser = require('cookie-parser');
 
//db stuff
const connectionString = "postgres://gcho91@localhost/gcho91";
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
  key: 'test',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: true}

}))

////////////////////////////////////////////

//endpts

//in server ctrl
app.get('/api/products', ctrl.getProducts)










///////////////////////////////////////////////////


//something showed up//////////////////////////
app.get('/test', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
      // res.send(req.sessionID);
      console.log("sessionID: ", req.sessionID);
   }
});

app.get('/test3', function(req, res, next) {
  console.log(req.sessionID);
  // res.send(req.sessionID);
})



// app.use(function printSession(req, res, next) {
//   console.log('req.session', req.session);
//   return next();
// });





//NOOOOOOOOOOOOO////////////////////////////////////////////////////////////

// app.get('/spaghetti', function(req, res, next) {
//   var sessData = req.session;
//   sessData.someAttribute = "foo";
//   sessData.fuckfuck = "spaghetti";
//   res.send('Returning with some text');
//   console.log(sessData);
//   console.log(req.sessionID);
//   // console.log(connect.sid);
// });





app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
})
