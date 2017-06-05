var fs = require('fs') ;

module.exports = function ( directory , extension , callback){
    var store = [] ;
    fs.readdir( directory , function( err , data ) {
    if(err){
        throw err ;
    }
    else{
        for( var i = 0 ; i < data.length ; i ++)
         {if(data[i].indexOf("." + extension) !== -1)
          {
             store.push(data[i]);  
          }
         }
    }
    callback(null , store) ;
}) ;

}
