var url = 'mongodb://localhost:27017/learnyoumongo' ;
var mongo = require('mongodb').MongoClient ;
var record = { "firstName" : process.argv[2] , "lastName" : process.argv[3] } ;
mongo.connect(url , function (err , db){
    if(err) throw err ;
    db.collection("docs").insert(record , function(err,data){
       if(err) throw err ;
       console.log(JSON.stringify(record)) ;
       db.close() ;
    }) ;
});