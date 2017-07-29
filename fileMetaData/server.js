var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/checkSize', function (req, res) {
  res.json({ "size" : req.headers['content-length'] + " bytes" });
}) ;
app.listen(process.env.PORT || 3000);
console.log("Server is up on port 3000");