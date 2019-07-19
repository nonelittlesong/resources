// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

console.log('\n\033[38;5;45m' +
            '  ███████╗ ██████╗ ██╗  ██╗ ██████╗ ██████╗ ███╗   ██╗███╗   ██╗\n' +
            '  ██╔════╝██╔═══██╗╚██╗██╔╝██╔════╝██╔═══██╗████╗  ██║████╗  ██║\n' +
            '  █████╗  ██║   ██║ ╚███╔╝ ██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║\n' +
            '  ██╔══╝  ██║   ██║ ██╔██╗ ██║     ██║   ██║██║╚██╗██║██║╚██╗██║\n' +
            '  ██║     ╚██████╔╝██╔╝ ██╗╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║\n' +
            '  ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝\n' +
            '\033[0m\n');
server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/imgs')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});


let numConnect = 0;

io.on('connection', (socket) => {
  numConnect++;
  console.log('a socket connected: ' + socket.id);
  console.log('the handshake details: ');
  console.log(socket.handshake);
  console.log('total number of connections: ' + numConnect);
  
  socket.on('disconnect', () => {
    numConnect--;
    console.log('a socket disconnected: ' + socket.id);
    console.log('total connections: ' + numConnect);
  });

});
