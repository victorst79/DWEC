var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

// SOCKET.IO
io.on('connection', function(socket){
    
    socket.on('nick',function(nick){
        // console.log("user connected: "+nick);
        socket.broadcast.emit('nick',nick);

        socket.on('chat message', function(msg){
            // console.log('message: ' + msg);
            io.emit('chat message', chatResponse = { 
                    nick: nick,
                    msg: msg
                }               
            );
        });;
    });        

    // DISCONNECTED
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
