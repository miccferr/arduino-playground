var five = require('johnny-five');
var firmata = require('firmata');
var RemoteIO = require('remote-io');
var EtherPort = require("etherport");


var sp = new VirtualSerialPort({
  host: '192.168.0.8',
  type: 'udp4',
  port: 3030
});
//The "sp" variable here could be any instance of a virtual serial port
var io = new firmata.Board(sp);


//The "io" variable here could be any instance of bean-io, rpi-io, etc.
io.on('ready', function(){
  var board = new five.Board({io: io});
  board.on('ready', function(){
    var led = new five.Led(9);
    led.blink();
  });

  //listen for remote firmata messages
   var remoteio = new RemoteIO({
     serial: sp, //any virtual serial port instance
     io: io
   });

});
