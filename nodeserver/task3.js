var fs = require('fs') ;
var buf = process.argv[2] ;

var content = fs.readFileSync(buf) ;
var arr = content.toString() ;
arr = arr.split("\n")
console.log( arr.length - 1 ) ;