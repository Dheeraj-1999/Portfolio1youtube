const express = require('express');
const path = require('path');
var app= express();
app.use('/assets',express.static(path.join(__dirname,'Resources')))
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('homepage.ejs');
})
app.get('/homepage', function(req, res) {
  res.render('homepage.ejs');
})
 module.exports = app;
