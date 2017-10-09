var io = require('socket.io')();

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log(message);
  });
});

io.listen(3000);
