var mongo = require('mongodb').MongoClient ;
var url = 'mongodb://localhost:27017/learnyoumongo' ;
var size = process.argv[2] ;

mongo.connect(url, function(err, db) {
  if (err) return console.log(err) ;

  // log the average price
  db.collection('prices').aggregate([
    {$match: {"size" : size}},
    {$group: {
      _id: 'avg',
      avg: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, res) {
    if (err) return console.log(err) ;
    console.log(res[0]['avg'].toFixed(2)) ;
    db.close() ;
  })
})