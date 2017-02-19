const net = require('net');

var server = net.createServer((socket) => {
  socket.write('Hello world from NodeJS!\n');
  socket.end();
}).on('error', (err) => {
  throw err;
});
console.log("Strating server @ port 23");
server.listen(23);
