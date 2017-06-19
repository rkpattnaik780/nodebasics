/* Pug is a high pperformance template engine
*/
var server1 = process.argv[2] ;
var path = require('path') ;
var express = require('express') ;
var app = express( ) ;

app.set('views' , path.join(__dirname , 'templates')) ;
app.set( 'view engine' , 'pug') ;
app.use(express.static(process.argv[3])) ;
app.get('/home' , function(req,res){
    res.render('index', { date : new Date().toDateString()}) ;
}) ;

app.listen(server1) ;