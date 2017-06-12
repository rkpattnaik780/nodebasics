var http = require('http');
var bl = require('bl');


// A bad example of code , improved solution on work . 
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {   // unlike the primitive method where there are different events to handle data 
        if (err) throw err;                  // comming in chunks , here all of the data is first accumulated using the bl moule 
        data = data.toString();             // that eliminates the need of response.on('data') and the event is automatically at end           // eqvt to res.on("end") so the data is directly put into console .
        console.log(data);

        http.get(process.argv[3], function (response) {
            response.pipe(bl(function (err, data) {
                if (err) throw err;
                data = data.toString();
                console.log(data);

                http.get(process.argv[4], function (response) {
                    response.pipe(bl(function (err, data) {
                        if (err) throw err;
                        data = data.toString();
                        console.log(data);
                    }));
                });
            }));
        });
    }));
});