var net = require('net');    // net module is used to create tcp servers and clients.

var server1 = process.argv[2];    // server1 = 23090 

function addZero(num) {
    return num < 10 ? "0" + num : num;
}

var server = net.createServer(function (socket) {   // net.createServer takes a function , which is a connection listener
                                                    // is called more than once . Every connection received by server triggers 
    var date = new Date();                          // another call to the listener
    var display = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' +
        addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + "\n";
    socket.write(display);
    socket.end() ;
    //console.log(server1) ;                // socket object contains lot of meta data regarding the connection, it can be both
});                                         // read from and written to .

server.listen(server1);