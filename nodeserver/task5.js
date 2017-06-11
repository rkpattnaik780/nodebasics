var fs = require('fs') ;
var directory = process.argv[2] ;  //  contains the path to a folder _learnyounode_7984
var ext = process.argv[3] ;      // ext stores the value md
fs.readdir( directory , function( err , data ) {  // to read the content of a directory
    if(err){                                     // data is an array of strings .
        throw err ;
    }
    else{
        for( i = 0 ; i < data.length ; i ++)
         {if(data[i].indexOf("." + ext) !== -1)
          {
             console.log(data[i]) ;
             console.log(directory) ;  
          }
         }
    }
}) ;

