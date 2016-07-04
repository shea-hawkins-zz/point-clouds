var express = require('express');
var app = express();


// Configuration details
var port = 3000;



app.get('/', function(req, res, next) {
  console.log(req);
});

app.listen(port, function() {
  console.log('App is listening on ' + port);
});
