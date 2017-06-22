var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ "platform" : req.headers['user-agent'] ,
             "language" : req.headers['accept-language'],
             "ipaddress" : req.connection.remoteAddress}) ;
});

module.exports = router;
