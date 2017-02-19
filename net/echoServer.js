const net = require('net');

var server = net.createServer(function(socket) {
  socket.write('Hello world from NodeJS!\n');
  socket.on('data', function(data) {
  socket.write(data);
  });
}).on('error', (err) => {
  throw err;
});

server.listen(8000);
