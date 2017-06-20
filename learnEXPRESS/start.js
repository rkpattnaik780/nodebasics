var server1 = process.argv[2] ;
var express = require('express') ;
var app = express() ;
app.get('/home' , function(req,res){  // app.get()  is part of Express' application routing and is intended 
                                      //for matching and handling a specific route when requested with the GET HTTP verb
    res.end("Hello World!") ;
});
app.listen(server1) ;