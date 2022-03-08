var SerialPort = require('serialport');

var serialPort = new SerialPort('/dev/tty.usbmodem14201', {baudRate: 9600} );

serialPort.on('data', function (data) {
  console.log('Data:', data.toString());
});
