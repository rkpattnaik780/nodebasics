var http = require('http') ;
var url = require('url') ;
var moment = require('moment') ;
var store = {} ;
var server1 = process.argv[2] ;

var server = http.createServer(function( request , response){
  // console.log( url.parse(req.url , true)) ;           the default value is false , setting it true gives us more methods.
  var keep = url.parse(request.url , true) ;
  store.pathname = keep.pathname ;
  store.query = keep.query ;
  response.writeHead( 200 , { 'Content-Type' : 'application/json'}) ;  // sets header of http response. Implies that these 
                                                                       // are kind of things we are sending in data.
  if( store.pathname === '/api/parsetime'){                            // 200 is OK!
       response.end(JSON.stringify({
          hour : moment(store.query.iso).hour() ,
          minute : moment(store.query.iso).minute(),
          second : moment(store.query.iso).second()
      }));
  }

  if( store.pathname === '/api/unixtime'){
       response.write(JSON.stringify({                          // writes text to the browser.
         unixtime : Number(moment(store.query.iso).format('x'))     // x is used as per documentation of moment module. 
      }));
   //   console.log(server1) ;
       response.end() ;
}
}) ;

server.listen(server1) ;

/*
URL is a core module , it has a method parse which gives us object with different properties.

HTTP header fields provide required information about the request or response, or about the object sent in the message body.
https://www.tutorialspoint.com/http/http_header_fields.html 
HTTP headers allow the client and the server to pass additional information with the request or the response.

calls to writeHead and end are not being done in the createServermethod, but rather in a callback.

https://nodejs.org/docs/v0.4.12/api/http.html#response.writeHead


url.parse('http://stackoverflow.com/questions/17184791').pathname    
will give you:
"/questions/17184791"
*/