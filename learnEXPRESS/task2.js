// for serving static files like html and css
var server1 = process.argv[2] ;
var path = require('path') ;
var express = require('express') ;
var app = express( ) ;

app.use(express.static(process.argv[3] || path.join(__dirname , 'public'))) ;

app.listen(server1 , function(){
  console.log('Server is running') ;
}) ;
// Middleware functions are functions that have access to the request object (req), the response object (res), and
// the next middleware function in the application’s request-response cycle. These functions are 
// used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
/* To restrict it to a specific route (and all its subroutes), provide that route as the first argument of app.use(). 
   
   express.static( ) is used to set the root route to include the static files directory.
*/