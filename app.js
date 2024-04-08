var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var zombie = require("./models/zombie")

require('dotenv').config();
const connectionString = process.env.MONGO_CON
var mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

//Seed Collection
async function recreateDB(){
  await zombie.deleteMany();
  let inst1 = new zombie({zombie_type:"Runner", height:72, turn_age:2})
  let inst2 = new zombie({zombie_type:"Charger", height:78, turn_age:4})
  let inst3 = new zombie({zombie_type:"Climber", height:60, turn_age:1})

  inst1.save().then(doc=>{
    console.log("First Object Saved")
  }).catch(err=>{
    console.error(err)
  })

  inst2.save().then(doc=>{
    console.log("Second Object Saved")
  }).catch(err=>{
    console.error(err)
  })

  inst3.save().then(doc=>{
    console.log("Third Object Saved")
  }).catch(err=>{
    console.error(err)
  })

}
let reseed = true
if(reseed) {
  recreateDB()
}else{
  console.log("Didn't Reseed")
}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zombiesRouter = require('./routes/zombies');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
const { start } = require('repl');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zombies', zombiesRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
