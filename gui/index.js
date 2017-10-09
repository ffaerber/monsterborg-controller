require('dotenv').config()

const groundStation = require('socket.io-client')(process.env.GROUND_STATION_HOST);

console.log('connecting to groundStaion ' + process.env.GROUND_STATION_HOST)
groundStation.on('connect', () => {
  console.log('groundStation connected')
  groundStation.emit({
    channel: 'thunderborg',
    method: 'getBatteryLevel',
    attributes: {}
  })
});

groundStation.on('event', (data) => {
  console.log('new event from groundStation ' + data);
});

groundStation.on('disconnect', () => {
  console.log('groundStation disconnected')
});
