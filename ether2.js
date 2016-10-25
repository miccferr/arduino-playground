
var net = require('net');
var five = require('johnny-five');
var firmata = require('firmata');

var options = {
  // host: '82.7.94.205',  //whatever host
  host: "192.168.0.8",
  port: 3030  //some port
};


var client = net.connect(options, function() { //'connect' listener
  console.log('connected to server!');

  var socketClient = this;

  //we can use the socketClient instead of a serial port as our transport
  var io = new firmata.Board(socketClient);

  io.once('ready', function(){
    console.log('io ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
      console.log('five ready');

      //Full Johnny-Five support here:

      var led = new five.Led(9);
      led.blink();

    });
  });

});
