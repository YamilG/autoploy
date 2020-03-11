var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello Dev!');
});

app.get('/dev', function(req, res) {
  res.send('Hello, you are in the dev route!');
});

app.listen(5000, function() {
  console.log('Dev app listening on port 5000!');
});
