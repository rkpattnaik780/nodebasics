var express = require('express');
var router = express.Router();
var useragent = require('express-useragent');
var app = express() ;
app.use(useragent.express());



/* GET home page. */
router.get('/', function(req, res, next) {

  res.json({
             "platform" : req.headers['user-agent'] ,
             "language" : req.headers['accept-language'].split(",")[0],
             "ipaddress" : req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||req.connection.socket.remoteAddress}) ;  
});

module.exports = router;
