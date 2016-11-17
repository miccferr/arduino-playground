var RemoteIO = require('remote-io');
var Board = require("firmata");
var io = new Board("path to serialport");
var MQTTSerialPort = require('mqtt-serial').SerialPort;
var mqtt = require('mqtt');
var firmata = require('firmata');

// setup the mqtt client with port, host, and optional credentials
current

//create the mqtt serialport and specify the send and receive topics
var serialPort = new MQTTSerialPort({
  client: client,
  transmitTopic: 'REPLACE WITH YOUR TRANSMIT TOPIC',
  receiveTopic: 'REPLACE WITH YOUR RECEIVE TOPIC'
});

//use the virtual serial port to send a command to a firmata device
var board = new firmata.Board(serialPort, function (err, ok) {
  if (err){ throw err; }
  //light up a pin
  board.digitalWrite(13, 1);
});



//The "io" variable here could be any instance of bean-io, rpi-io, etc.
io.on('ready', function(){

   //listen for remote firmata messages
   var remoteio = new RemoteIO({
     serial: sp, //any virtual serial port instance
     io: io
   });

});
