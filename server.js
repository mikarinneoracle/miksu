var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/hello/:name', function(req, res) {
  var name = req.params.name;
  res.send("Hello " + name);
});

app.post("/hello", function (req, res) {
    var name = req.body.name;
    console.log("New user " + name);
    res.send("Hello " + name);
});

app.listen(port, function() {
  	console.log('server listening on port ' + port);
});
