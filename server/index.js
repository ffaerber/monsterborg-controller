var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('connected ...')
  socket.on('event', (data) =>{
    io.emit('event', data);
  });
  socket.on('disconnect', function(){
    console.log('disconnect')
  });
});
server.listen(3000);

