var fs = require('fs') ;
var directory = process.argv[2] ;
var ext = process.argv[3] ;
fs.readdir( directory , function( err , data ) {
    if(err){
        throw err ;
    }
    else{
        for( i = 0 ; i < data.length ; i ++)
         {if(data[i].indexOf("." + ext) !== -1)
          {
             console.log(data[i]) ;  
          }
         }
    }
}) ;

