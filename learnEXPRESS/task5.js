var express = require('express') ;
var app = express() ;
var server1= process.argv[2] ;
var filepath = process.argv[3] ;
app.use(require('stylus').middleware(filepath)) ; // telling stylus the folder to look for stylesheets , and if name matches , compile it
app.use(express.static(filepath)) ;  // stylus compiles .styl files that is provided by the filepath variable
app.get(filepath, function(req, res) {
  res.render('main');
});
app.listen(server1) ;