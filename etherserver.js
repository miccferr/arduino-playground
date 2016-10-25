var five = require("johnny-five");
var EtherPort = require("etherport");
var board = new five.Board({
  port: new EtherPort(3030)
});

board.on("ready", function() {
  console.log('connesso');
  led = new five.Led(9);
  led.blink(500);

  // this.repl.inject({
  //   led: led
  // })
});
