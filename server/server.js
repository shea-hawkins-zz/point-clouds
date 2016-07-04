var express = require('express');
var router = require('./router');
var app = express();


// Configuration details
var port = 3000;

app.use('/', function (req, res, next) {
  console.log(req.method + ' request received at ' + req.path);
  next();
});

app.use('/', router);

app.use('/', function (req, res, next) {
  console.log(req.method + ' request responded at ' + req.path);
  next();
});

app.listen(port, function() {
  console.log('App is listening on ' + port);
});
