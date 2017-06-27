var url = 'mongodb://localhost:27017/' + process.argv[2] ;
var mongo = require('mongodb').MongoClient ;
var record = { "_id" : process.argv[4] } ;
mongo.connect(url , function (err , db){
    if(err) throw err ;
    db.collection(process.argv[3]).remove(record , function(err,data){
       if(err) throw err ;
       db.close() ;
    }) ;
});