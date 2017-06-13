// using the bl module the data is collected in whole and not in chunks.
var http = require('http');
var bl = require('bl') ;

http.get(process.argv[2], function(response){
    response.pipe(bl(function(err , data){   // unlike the primitive method where there are different events to handle data 
        if(err) throw err ;                  // comming in chunks , here all of the data is first accumulated using the bl moule 
        data = data.toString() ;             // that eliminates the need of response.on('data') and the event is automatically at end
        console.log(data.length) ;           // eqvt to res.on("end") so the data is directly put into console .
        console.log(data) ;   
    })) ;
});

/*
https://github.com/nodeschool/discussions/issues/311 - this was too useful for understanding

Response is a stream, and like any other stream object it can be redirected to another stream. 
The common use of pipe is sourceStream.pipe(destinationStream). You can get more details on that in NodeSchool's stream-adventure

Call to bl(...) creates an input-output (duplex) stream.
 As I said before, with callback parameter it concatenates all input chunks (piped from sourceStream which is response) into one
  Buffer, and passes it to callback function as 'data' argument.

// response.pipe() - response flow is directed towards the bl function .
 bl (bufferList) is both writable and readable. 
https://github.com/arshdkhn1/node-notes

Http.get DOES finish execution (by creating the stream) before the callback is called. 
It is the stream that is still being processed in the callback. 
The end result of http.get is the stream object that is still updating until the complete response is received.

Here is the order of operation

1- http.get calls the external resource.

2- http.get creates the response object as a stream and updates it as the data comes in from the external resource

3- Upon each update of the response object, it emits a "data" event.

4- function callback contains a listener (response.on) that is activated whenever the "data" event is thrown.

pipe allows us not to manually access data events.
*/