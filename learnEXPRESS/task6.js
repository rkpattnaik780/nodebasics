/*
In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function designed by the United States
 National Security Agency and is a U.S. Federal Information Processing Standard published by the United States NIST.
  SHA-1 produces a 160-bit (20-byte)
 hash value known as a message digest. A SHA-1 hash value is typically rendered as a hexadecimal number, 40 digits long.
*/

var express = require('express') ;
var app = express() ;

app.put('/message/:id', function(req, res) {
  var id = req.params.id ;
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex') ;
  res.send(str) ;
})

app.listen(process.argv[2]) ;