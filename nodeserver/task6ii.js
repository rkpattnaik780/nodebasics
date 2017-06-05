var answer = require("./task6i") ;
var directory = process.argv[2] ;
var extension = process.argv[3] ;

answer( directory , extension , function( err , store){
    if(err) { throw err ;}
   
    else{
        for( var j = 0 ; j < store.length ; j ++){
            console.log(store[j]) ;
        }
    }
}) ;