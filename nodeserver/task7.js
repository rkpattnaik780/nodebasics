var http = require("http") ;
var directory = process.argv[2] ;  // directory = http://localhost:49859

http.get( directory , function callback (res){    // doesnt have a error object like other callbacks.
    res.setEncoding('utf-8') ;                    // the res is a stream object , contantly flowing stream of data. 3 props - data , end
    res.on( 'data' ,function (data){              // https://www.quora.com/What-is-the-difference-between-streams-and-buffers-in-JavaScript-Node-js  
        console.log(data) ;                       // https://medium.freecodecamp.com/node-js-streams-everything-you-need-to-know-c9141306be93
     //   console.log(directory) ;
    }) ; 
}) ;

/*
   callback function is called when connection is established.
   res.on('data') is called when there's a chunk of data ( will be called more than once ) .
   res.on('close') is called when the connection closes.
*/