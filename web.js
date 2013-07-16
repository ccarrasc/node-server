var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.get('/', function(request, response) {
  response.send(process.versions);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

