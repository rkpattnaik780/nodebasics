var url = 'mongodb://localhost:27017/learnyoumongo' ; // a connection URL with the correct 
                                                      // ip address and the name of the database you want to create
                                                      // the database name is learnyoumongo
var mongo = require('mongodb').MongoClient ; // Creates a mongoclient object. 
mongo.connect(url, function(err, db) {
  if (err) throw err
    // db gives access to the database
  db.collection('parrots').find({                   // parrots is an existing collection in learnyoumongo database
    age: {
      // greater than integer, see resources "Find"
      $gt: parseInt(process.argv[2]) 
    }
  }).toArray(function(err, documents) {        // all data in parrots is traversed and piped to documents.
    // Here is where we decide what to do with the query results
    if (err) throw err ;  // handles the error
    console.log(documents) ;       // documents is displayed in the console
    // Always close the connection after you get what you need
    db.close() ;                   // closes the database, without close the program doesnt finish executing
  }) ;
}) ;