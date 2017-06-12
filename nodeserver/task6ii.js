var answer = require("./task6i") ;
var directory = process.argv[2] ;
var extension = process.argv[3] ;

answer( directory , extension , function( err , store){    // by this call function of task6i is called upon , the directory and 
    if(err) { throw err ;}                                  // extension are passed , and the filtered items are collected in store 
                                                            // array.
    else{                                                     // call back function (anonymous) is defined here , which is called
        for( var j = 0 ; j < store.length ; j ++){          // after the store array is created .
            console.log(store[j]) ;
        }
    }
}) ;