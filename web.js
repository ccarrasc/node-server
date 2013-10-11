var express = require('express');
var ejs = require('ejs');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);


app.get('/stuff', function(request, response) {
  response.render('stuff.html', { versions: JSON.stringify(process.versions).replace(/,/g, '<br>') });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

