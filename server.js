const net = require('net');

const PORT = process.env.PORT || 3000;

const server = net.createServer((socket) => {
  console.log('TRB145 connected:', socket.remoteAddress);

  socket.on('data', (data) => {
    console.log('Data received (raw):', data);
    console.log('Data as text:', data.toString('utf8'));
  });

  socket.on('end', () => console.log('Connection closed'));
  socket.on('error', (e) => console.log('Socket error:', e));
});

server.listen(PORT, () => console.log(`TCP server listening on ${PORT}`));
