var http = require('http') ;

var map = require('through2-map') ;

var server1 = process.argv[2] ;

var i = 0;

var server = http.createServer( function ( request , response ){   
  request.pipe(map(function(chunk) {      //chunk is a buffer object. Comes part by part                               
    return (chunk + (++i)).toString().toUpperCase();
  })).pipe(response);

}) ;

server.listen(server1) ;
/*
through2-map works as Array.prototype.map for streams. the callback takes a chunk of data and returns a chunk of data.
*/