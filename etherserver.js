var five = require("johnny-five");
var EtherPort = require("etherport");
var board = new five.Board({
  port: new EtherPort(3030)
});

board.on("ready", function() {
  console.log('connesso');
  var led = new five.Led(13);
  led.blink(500);
});
