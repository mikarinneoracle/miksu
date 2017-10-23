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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/hello/:name?', function(req, res) {
  var name = req.params.name;
  if(!name)
  {
      name = 'friend';
  }
  return res.status(200).json( { 'response' : 'Hello ' + name + '!' });
});

app.post("/hello", function (req, res) {
    var name = req.body.name;
    if(!name)
    {
        name = 'friend';
    }
    return res.status(200).json( { 'response' : 'Hello ' + name + '!' });
});

app.listen(port, function() {
  	console.log('server listening on port ' + port);
});
