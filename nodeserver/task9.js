var http = require("http") ;
var directory = process.argv[2] ;

   var store = "" ;

http.get( directory , function callback (res , err){
    if (err)  
           { return console.error(err) ; }
    res.on( 'data' ,function (data){
        data = data.toString( ) ;
        store += data ;
      /*  console.log(store.length) ;
        console.log(store) ; */
    }) ; 
    res.on( 'end' , function(){
        console.log(store.length) ;
        console.log(store) ; 
    }) ;
}) ;
