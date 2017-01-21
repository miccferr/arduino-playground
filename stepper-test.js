var five = require("johnny-five");
var board = new five.Board({repl:false});

board.on("ready", function() {

  /**
   * In order to use the Stepper class, your board must be flashed with
   * either of the following:
   *
   * - AdvancedFirmata https://github.com/soundanalogous/AdvancedFirmata
   * - ConfigurableFirmata https://github.com/firmata/arduino/releases/tag/v2.6.2
   *
   */

  var stepper = new five.Stepper({
    type: five.Stepper.TYPE.FOUR_WIRE,
    stepsPerRev: 32,
    pins: [8,9,10,11]
    // pins: {
    //   step: 11,
    //   dir: 13
    // }
  });

  var buttonRight = new five.Button(12);
  var buttonLeft = new five.Button(2);
  var led = new five.Led(13);


  buttonRight.on("press", function() {
   console.log( "Stepping RIGHT" );
   led.on();
   stepper.direction(0).step(200, function() {
     console.log("Done stepping!");
   });
 });

 buttonRight.on("release", function() {
   led.off();
 });

 buttonLeft.on("press", function() {
   console.log( "Stepping LEFT" );
   led.on();
   stepper.direction(1).step(200, function() {
     console.log("Done stepping!");
   });
});

buttonLeft.on("release", function() {
  led.off();
});


  // Make 10 full revolutions counter-clockwise at 180 rpm with acceleration and deceleration
  // stepper.rpm(180).ccw().accel(1600).decel(1600).step(2000, function() {
  //
  //   console.log("Done moving CCW");
  //
  //   // once first movement is done, make 10 revolutions clockwise at previously
  //   //      defined speed, accel, and decel by passing an object into stepper.step
  //   stepper.step({
  //     steps: 2000,
  //     direction: five.Stepper.DIRECTION.CW
  //   }, function() {
  //     console.log("Done moving CW");
  //   });
  // });

  // stepper.rpm(180).ccw().step(200, function(){
  //  console.log("done");
  // });
//   stepper.direction(five.Stepper.DIRECTION.CW).step(2000, function() {
//   console.log("Done stepping!");
// });

// stepper.direction(five.Stepper.DIRECTION.CCW).step(2000, function() {
//   console.log("Done stepping!");
// });
});
