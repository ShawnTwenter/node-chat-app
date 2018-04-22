const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3003;

var app = new express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');


    socket.on('createMessage',(message) => {
        console.log('Create Message: ',message);
        io.emit('newMessage', {
            from: message.from ,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('client disconected');
    });
});



server.listen(port,() => {
    console.log(`The server is running on port ${port}`);
});