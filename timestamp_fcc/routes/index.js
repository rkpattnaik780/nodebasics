var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res) {
  if(!isNaN(req.params.time))
   { 
     var d = new Date ( req.params.time * 1000) ;
     res.json( { date : d.toDateString().slice(4) , unix : req.params.time} ) ;
   }  
  else{
     var d = new Date ( req.params.time) ;
     res.json({ date : d.toDateString().slice(4) , unix : d.getTime()/1000}) ;
  }  
});

module.exports = router;
