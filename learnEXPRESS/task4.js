/*
Body-parser enables express.js to process the incoming data as a normal js object instead of url encoded string.
*/

var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.post('/form',function(req,res){
    
    res.send(req.body.str.split('').reverse().join('') );
}) ;

app.listen(process.argv[2]) ;