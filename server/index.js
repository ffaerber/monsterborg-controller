var io = require('socket.io')();
console.log('starting...')
io.on('connection', (socket) => {
  console.log('connected')
  socket.on('message', (message) => {
    console.log(message);
  });
});

io.listen(3000);
