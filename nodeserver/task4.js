var fs = require('fs') ;
var path = process.argv[2] ;
 fs.readFile( path , function(err , data){   // path has the value  C:\users\acer.....temp\_learnyounode_6028.txt
     if (err){                               // doesnt return value like sync method , instead data is collected and passed to the
        throw err ;                           // callback function. Callback is executed after data is collected as whole. 
     }                                         // the console.log('hello') is executed first as the program doesnt wait for the time 
     else{                                     // it takes to read the file.
        // console.log(path) ;
         console.log( data.toString().split("\n").length - 1 ) ;
     }
     console.log('hello') ;
 }) ;


