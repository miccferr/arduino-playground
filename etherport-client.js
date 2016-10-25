var EtherPortClient = require("etherport-client").EtherPortClient;
var Firmata = require("firmata");
var five = require("johnny-five");

var board = new five.Board({
  io: new Firmata(new EtherPortClient({
    // host: '82.7.94.205',
    host: "192.168.0.8",
    port: 3030
  })),
  timeout: 1
});



board.on('ready', function() {
  console.log("ready");

  // tempSensor = new five.Thermometer({
  //    controller: "TMP36",
  //    pin: "A0",
  //    aref: 1
  // });
  var led = new five.Led(9);
  io.on('connection', function (socket) {
     console.log('sockets on connection');
    led.strobe();
    //  tempSensor.on('change', function(){
    //     console.log(this.C); //Celsius
    //     console.log(this.F); //Fahrenheit
    //     socket.emit('tempData', this.F);
    //  });
   });
});
