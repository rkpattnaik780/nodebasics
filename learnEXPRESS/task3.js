/* Pug is a high pperformance template engine
*/
var server1 = process.argv[2] ;
var path = require('path') ;
var express = require('express') ;
var app = express( ) ;

app.set('views' , path.join(__dirname , 'templates')) ; // tells the directory where template files are located , directs to the index page
app.set( 'view engine' , 'pug') ; // sets template to pug.
app.use(express.static(process.argv[3])) ;
//console.log(process.argv[3]) ;
app.get('/home' , function(req,res){   // /home is the route at which the request will run.
    res.render('index', { date : new Date().toDateString()}) ;
}) ;  // res.render() function compiles your template , 
      // inserts locals there, and creates html output out of those two things.

app.listen(server1) ;