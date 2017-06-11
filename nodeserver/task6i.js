var fs = require('fs') ;
var path = require('path') ;
module.exports = function ( directory , extension , callback){
    var store = [] ;
    fs.readdir( directory , function( err , data ) {
    if(err){
        return callback(err) ;    // error 
    }
    else{
        for( var i = 0 ; i < data.length ; i ++)
         {if(data[i].indexOf("." + extension) !== -1)
          {
             store.push(data[i]);      // a collection of matched items
          }
         }
    }
    return callback(null , store) ;   // null is the error object
}) ;

}
