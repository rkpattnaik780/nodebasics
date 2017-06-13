var http = require('http') ;

var fs = require('fs') ;
var address = process.argv[3] ;

var server1 = process.argv[2] ;

var server = http.createServer( function ( request , response ){   // creates a sever that can talk http , essential for http
                                                                   // essential for http server.
  var chunks = fs.createReadStream(address) ;                 
  chunks.pipe(response) ;                                           // createServer( ) - Returns a new stream object
                                                                    //  pipe is used to write , eqvt to res.on(end)
}) ;
 server.listen(server1) ;

 // http://joecreager.com/learnyounode-lesson-11-http-file-server/

 // source.pipe(response) where source is readable stream and response is the writeable stream.