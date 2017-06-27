var url = 'mongodb://localhost:27017/' + process.argv[2] ;
var mongo = require('mongodb').MongoClient ;

mongo.connect(url , function (err , db){
    if(err) throw err ;
    db.collection("users").update({ "username" : "tinatime" } ,{ $set : {"age" : 40 } } , function(err,data){
       if(err) throw err ;
       
       db.close() ;
    }) ;
});