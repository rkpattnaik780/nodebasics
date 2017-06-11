var fs = require('fs');
var buf = process.argv[2];

var content = fs.readFileSync(buf);  // the buf contains "_learnyounode_6788.txt"
var arr = content.toString();   // content has a buffer object having complete contents of the file which needs to be converted to string.
arr = arr.split("\n")
console.log(arr.length - 1);
//console.log(process.argv) ;