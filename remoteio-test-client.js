var five = require('johnny-five');
var firmata = require('firmata');

//The "sp" variable here could be any instance of a virtual serial port
var io = new firmata.Board(sp);

var board = new five.Board({io: io});
board.on('ready', function(){
  var led = new five.Led(13);
  led.blink();
});
