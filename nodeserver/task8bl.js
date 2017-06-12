// using the bl module the data is collected in whole and not in chunks.
var http = require('http');
var bl = require('bl') ;

http.get(process.argv[2], function(response){
    response.pipe(bl(function(err , data){   // unlike the primitive method where there are different events to handle data 
        if(err) throw err ;                  // comming in chunks , here all of the data is first accumulated using the bl moule 
        data = data.toString() ;             // that eliminates the need of response.on('data') and the event is automatically at end
        console.log(data.length) ;           // eqvt to res.on("end") so the data is directly put into console .
        console.log(data) ;
    })) ;
});