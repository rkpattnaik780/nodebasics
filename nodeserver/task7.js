var http = require("http") ;
var directory = process.argv[2] ;

http.get( directory , function callback (res){
    res.on( 'data' ,function (data){
        console.log(data.toString()) ;
    }) ; 
}) ;