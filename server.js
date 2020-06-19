const express = require('express');
const chalk = require('chalk');
const homepage = require('./Routes/homepage');
// const rr = require('./Routes/restaurantreview');
// const cors = require('cors');
const path = require('path');
var app=express();
const port=process.env.PORT || 1010
app.use('/assets',express.static(path.join(__dirname,'Resources')))
app.use('/',function(req,res,next){
  console.log(req.url);
  next();
})
// app.use(cors())

app.get('/',homepage);
app.get('/homepage',homepage);
// app.get('/restaurantreviewanalysis',rr);



app.use(function(req,res,next){
  res.status(404).send("Not Found");
  next();
})
app.use(function(err,req,res,next){
  res.send(err.message);
  next();
})


app.listen(port);
console.log(chalk.blue(port));
