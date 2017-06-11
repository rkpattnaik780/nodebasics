var fs = require('fs') ;
var path = process.argv[2] ;
 fs.readFile( path , function(err , data){   // path has the value  C:\users\acer.....temp\_learnyounode_6028.txt
     if (err){                               // doesnt return value like sync method , instead it collects data in the callback .
        throw err ;                           // if throw is executed the program is terminated.
     }
     else{
        // console.log(path) ;
         console.log( data.toString().split("\n").length - 1 ) ;
     }
 }) ;


